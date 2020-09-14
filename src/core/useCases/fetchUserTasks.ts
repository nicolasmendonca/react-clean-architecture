import { ITask } from "../entities";

export type fetchUserTasksService = (userId: number) => Promise<ITask[]>;

export function createFetchUserTasks(fetchTasksService: fetchUserTasksService) {
  return async (userId: number) => fetchTasksService(userId);
}
