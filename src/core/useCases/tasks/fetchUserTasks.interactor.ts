import { ITask } from "../../entities";

export type fetchUserTasksService = (userId: number) => Promise<ITask[]>;

export async function fetchUserTasksInteractor(fetchTasksService: fetchUserTasksService, userId: number) {
  return fetchTasksService(userId);
}
