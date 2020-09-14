import { ITask } from "../core/entities";
import { fetchUserTasksService } from "../core/useCases";
import { UserTasksRepository } from '../repositories/userTasks';

export const createUserTasksService = (userTasksRepository: UserTasksRepository): fetchUserTasksService => async () => {
  const response = await userTasksRepository();
  const mappedTasks: ITask[] = response.map((todo) => ({
    id: todo.id,
    completed: todo.completed,
    description: todo.title,
  }));
  return mappedTasks;
};

