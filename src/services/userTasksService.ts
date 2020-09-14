import { fetchUserTasksService } from "../core/useCases";
import { UserTasksRepository } from "../repositories/userTasks";

export const createUserTasksService = (
  userTasksRepository: UserTasksRepository
): fetchUserTasksService => async () => {
  const response = await userTasksRepository();
  return response.map((todo) => ({
    id: todo.id,
    completed: todo.completed,
    description: todo.title,
  }));
};
