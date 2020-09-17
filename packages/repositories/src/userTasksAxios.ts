import axios from "axios";
import { UserTasksRepository } from "@app/core";

export const userTasksAxiosRepository: UserTasksRepository = async () => {
  const tasksUrl = `https://jsonplaceholder.typicode.com/todos`;
  const result = await axios(tasksUrl);
  if (result.status < 200 || result.status >= 300)
    throw Error(result.statusText);
  return result.data;
};
