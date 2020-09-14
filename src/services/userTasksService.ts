import { ITask } from "../core/entities";
import { fetchUserTasksService } from "../core/useCases";

interface ITodoResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function userTasksAPIRepository(): Promise<ITodoResponse[]> {
  const tasksUrl = `https://jsonplaceholder.typicode.com/todos`;
  const result = await fetch( tasksUrl );
  if ( !result.ok )
    throw Error( result.statusText );
  return result.json();
}

export const userTasksService: fetchUserTasksService = async () => {
  const response = await userTasksAPIRepository();
  const mappedTasks: ITask[] = response.map((todo) => ({
    id: todo.id,
    completed: todo.completed,
    description: todo.title,
  }));
  return mappedTasks;
};

