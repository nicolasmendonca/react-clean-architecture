interface ITodoResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export type UserTasksRepository = () => Promise<ITodoResponse[]>;

export const userTasksAPIRepository: UserTasksRepository = async () => {
  const tasksUrl = `https://jsonplaceholder.typicode.com/todos`;
  const result = await fetch( tasksUrl );
  if ( !result.ok )
    throw Error( result.statusText );
  return result.json();
}
