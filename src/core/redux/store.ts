import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { tasksReducer, TaskState } from "./task.slice";
import { fetchUserTasksService } from "../../core/useCases";

const createEntitiesEmptyState = () => ({
  ids: [],
  entities: {},
});

export interface StoreState {
  tasks: TaskState;
}

const preloadedState: StoreState = {
  tasks: createEntitiesEmptyState(),
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
