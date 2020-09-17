import { UserTasksRepository } from "@app/core";

export const userTasksFetchRepository: UserTasksRepository = async () => {
  const tasksUrl = `https://jsonplaceholder.typicode.com/todos`;
  const result = await fetch(tasksUrl);
  if (!result.ok) throw Error(result.statusText);
  return result.json();
};
