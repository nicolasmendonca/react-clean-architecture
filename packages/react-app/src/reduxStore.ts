import { createStore, createFetchUserTasksService } from "@app/core";
import { userTasksFetchRepository } from "@app/repositories";

export const store = createStore({
  fetchUserTasksService: createFetchUserTasksService(userTasksFetchRepository),
});
export type StoreType = typeof store;
