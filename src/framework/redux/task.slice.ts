import {} from "immer";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { StoreState } from "./store";
import { ITask } from "../../core/entities";
import {
  createNewTask,
  toggleTaskCompleted,
  fetchUserTasks as fetchUserTasksInteractor,
} from "../../core/useCases";
import { tasksRepository } from "../../repositories/tasksRepository";

let taskId = 0;
const initialState: TaskMap = {};

export type TaskMap = { [K: number]: ITask };
interface ToggleTaskCompletedPayload {
  taskId: number;
  completed: boolean;
}

export const fetchUserTasks = createAsyncThunk(
  "tasks/fetchUserTasks",
  async (userId: number): Promise<TaskMap> => {
    const tasks = await fetchUserTasksInteractor(tasksRepository, userId);
    return tasks.reduce((taskMap, task) => {
      taskMap[task.id] = task;
      return taskMap;
    }, {} as TaskMap);
  }
);

export const tasks = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    createTask: {
      reducer: (state: TaskMap, action: PayloadAction<ITask, string>) => {
        state[action.payload.id] = action.payload;
      },
      prepare: (description: string) => {
        const task = createNewTask((taskId += 1), description);
        return {
          payload: task,
        };
      },
    },
    toggleTaskCompleted: (
      state: TaskMap,
      action: PayloadAction<ToggleTaskCompletedPayload, string>
    ) => {
      const task = state[action.payload.taskId];
      state[task.id] = toggleTaskCompleted(task, action.payload.completed);
    },
  },
  extraReducers: {
    [fetchUserTasks.fulfilled.toString()]: (
      _: TaskMap,
      action: PayloadAction<TaskMap>
    ) => {
      return action.payload;
    },
  },
});

export const taskSelector = (store: StoreState): ITask[] =>
  Object.values(store.tasks);

export const tasksReducer = tasks.reducer;
