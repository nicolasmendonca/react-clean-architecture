import { fetchUserTasksService } from "../useCases";

interface ITodoResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export type UserTasksRepository = () => Promise<ITodoResponse[]>;

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
