import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { tasksReducer, TaskState } from "./task.slice";
import { fetchUserTasksService } from "../../core/useCases";

export interface StoreState {
  tasks: TaskState;
}

const preloadedState: StoreState = {
  tasks: { ids: [], entities: {} },
};

export interface AppServices {
  fetchUserTasksService: fetchUserTasksService;
}

export const createStore = (appServices: AppServices) => {
  const middleware = getDefaultMiddleware({
    thunk: {
      extraArgument: appServices,
    },
  });
  return configureStore({
    reducer: {
      tasks: tasksReducer,
    },
    preloadedState,
    middleware,
  });
};
