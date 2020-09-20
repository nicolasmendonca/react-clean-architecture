import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  createEntityAdapter,
  EntityState,
} from "@reduxjs/toolkit";
import { ITask } from "../entities";
import {
  createTaskInteractor,
  toggleTaskCompletedInteractor,
  fetchUserTasksInteractor,
} from "../useCases";
import { AppServices } from "./store";

let taskId = 0;

export type TaskState = EntityState<ITask>;

interface ToggleTaskCompletedPayload {
  taskId: number;
  completed: boolean;
}

interface CreateTaskActionPayload {
  description: string;
}

const fetchUserTasks = createAsyncThunk(
  "tasks/fetchUserTasks",
  async (userId: number, thunkApi) => {
    const appServices = thunkApi.extra as AppServices;
    return fetchUserTasksInteractor(appServices.fetchUserTasksService, userId);
  }
);

const tasksAdapter = createEntityAdapter<ITask>();

const tasks = createSlice({
  name: "tasks",
  initialState: tasksAdapter.getInitialState(),
  reducers: {
    createTask: (state, action: PayloadAction<CreateTaskActionPayload>) => {
      return tasksAdapter.upsertOne(
        state,
        createTaskInteractor({
          id: taskId += 1,
          description: action.payload.description,
        })
      );
    },
    toggleTaskCompleted: (
      state,
      action: PayloadAction<ToggleTaskCompletedPayload>
    ) => {
      const task = tasksSelectors.selectById(state, action.payload.taskId);
      if (!task) throw Error("Task not found");
      tasksAdapter.updateOne(state, {
        id: action.payload.taskId,
        changes: toggleTaskCompletedInteractor(task, action.payload.completed),
      });
    },
  },
  extraReducers: {
    [fetchUserTasks.fulfilled.type]: tasksAdapter.setAll,
  },
});

export const tasksSelectors = tasksAdapter.getSelectors();
export const tasksReducer = tasks.reducer;
export const tasksActions = {
  ...tasks.actions,
  toggleTaskCompleted: tasks.actions.toggleTaskCompleted,
  fetchUserTasks,
};
