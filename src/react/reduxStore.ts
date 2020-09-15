import { createStore, createUserTasksService } from "../core";
import { userTasksAPIRepository } from "../repositories/userTasksFetch";

export const store = createStore({
  fetchUserTasksService: createUserTasksService(userTasksAPIRepository),
});
export type StoreType = typeof store;
