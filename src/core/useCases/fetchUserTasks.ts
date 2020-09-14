import { ITask } from "../entities";

export type fetchUserTasksService = (userId: number) => Promise<ITask[]>;

export async function fetchUserTasks(fetchTasksService: fetchUserTasksService, userId: number) {
  return fetchTasksService(userId);
}
