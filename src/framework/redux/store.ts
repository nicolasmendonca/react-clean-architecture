import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer, TaskMap } from "./task.slice";

export interface StoreState {
  tasks: TaskMap;
}

const preloadedState: StoreState = {
  tasks: {},
};

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  preloadedState,
});

export type AppDispatch = typeof store.dispatch;
