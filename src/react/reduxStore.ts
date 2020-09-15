import { createStore, createFetchUserTasksService } from "../core";
import { userTasksAPIRepository } from "../repositories/userTasksFetch";

export const store = createStore({
  fetchUserTasksService: createFetchUserTasksService(userTasksAPIRepository),
});
export type StoreType = typeof store;
