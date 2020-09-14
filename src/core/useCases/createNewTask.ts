import { ITask } from "../entities";

export function createNewTask(id: number, description: string): ITask {
  return {
    id,
    description,
    completed: false,
  };
}
