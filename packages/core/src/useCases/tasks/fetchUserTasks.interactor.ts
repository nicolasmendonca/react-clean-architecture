import { ITask } from "../../entities";

export type FetchUserTasksService = (userId: number) => Promise<ITask[]>;

export async function fetchUserTasksInteractor(fetchTasksService: FetchUserTasksService, userId: number) {
  return fetchTasksService(userId);
}
