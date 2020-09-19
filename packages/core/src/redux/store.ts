import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { tasksReducer, TaskState } from "./tasks";
import { FetchUserTasksService } from "../useCases";

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
  fetchUserTasksService: FetchUserTasksService;
}

export const createStore = (
  appServices: AppServices,
  extraReducers: any = {},
  extraArguments: any = {}
) => {
  const middleware = getDefaultMiddleware({
    thunk: {
      extraArgument: {
        ...extraArguments,
        ...appServices,
      },
    },
  });
  return configureStore({
    reducer: {
      ...extraReducers,
      tasks: tasksReducer,
    },
    preloadedState,
    middleware,
  });
};
