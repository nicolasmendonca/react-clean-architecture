import { createStore } from "../core/redux/store";
import { createUserTasksService } from "../core/services";
import { userTasksAPIRepository } from "../repositories/userTasksFetch";

export const store = createStore({
  fetchUserTasksService: createUserTasksService(userTasksAPIRepository),
});
export type StoreType = typeof store;
