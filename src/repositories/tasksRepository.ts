import { ITask } from "../core/entities";
import { fetchUserTasksService } from "../core/useCases/fetchUserTasks";

interface ITodoResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const tasksRepository: fetchUserTasksService = async () => {
  const tasksUrl = `https://jsonplaceholder.typicode.com/todos`;
  const result = await fetch(tasksUrl);
  if (!result.ok) throw Error(result.statusText);
  const response = await result.json();
  const mappedTasks: ITask[] = response.map((todo: ITodoResponse) => ({
    id: todo.id,
    completed: todo.completed,
    description: todo.title,
  }));
  return mappedTasks;
};
