import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { StoreState } from "./store";
import { ITask } from "../../core/entities";
import {
  createNewTaskInteractor,
  toggleTaskCompletedInteractor,
  fetchUserTasksInteractor,
} from "../../core/useCases";
import { AppServices } from './store';

let taskId = 0;
const initialState: TaskMap = {};

export type TaskMap = { [K: number]: ITask };

interface ToggleTaskCompletedPayload {
  taskId: number;
  completed: boolean;
}

const fetchUserTasks = createAsyncThunk(
  "tasks/fetchUserTasks",
  async (userId: number, thunkApi) => {
    const appServices = thunkApi.extra as AppServices
    const tasks = await fetchUserTasksInteractor(appServices.fetchUserTasksService, userId);
    return tasks.reduce((taskMap, task) => {
      taskMap[task.id] = task;
      return taskMap;
    }, {} as TaskMap);
  },
);

const tasks = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    createTask: {
      reducer: (state: TaskMap, action: PayloadAction<{ id: number, description: string }, string>) => {
        try {
          const task = createNewTaskInteractor(action.payload.id, action.payload.description)
          state[task.id] = task;
        } catch (e) {
          alert(e.message)
        }
      },
      prepare: (description: string) => {
        return {
          payload: {
            id: taskId += 1,
            description,
          },
        };
      },
    },
    toggleTaskCompleted: (
      state: TaskMap,
      action: PayloadAction<ToggleTaskCompletedPayload, string>
    ) => {
      const task = state[action.payload.taskId];
      state[task.id] = toggleTaskCompletedInteractor(task, action.payload.completed);
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
export const tasksActions = {
  ...tasks.actions,
  fetchUserTasks,
}
