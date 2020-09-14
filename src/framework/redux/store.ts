import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createUserTasksService } from '../../services'
import { userTasksAPIRepository } from '../../repositories/userTasks'
import { tasksReducer, TaskMap } from "./task.slice";
import { fetchUserTasksService } from '../../core/useCases';

export interface StoreState {
  tasks: TaskMap;
}

const preloadedState: StoreState = {
  tasks: {},
};

export interface AppServices {
  fetchUserTasksService: fetchUserTasksService;
}

export const createStore = (appServices: AppServices) => {
  const middleware = getDefaultMiddleware({
    thunk: {
      extraArgument: appServices
    }
  })
  return configureStore({
    reducer: {
      tasks: tasksReducer,
    },
    preloadedState,
    middleware
});
}

export const store = createStore({
  fetchUserTasksService: createUserTasksService(userTasksAPIRepository)
});

export type AppDispatch = typeof store.dispatch;
