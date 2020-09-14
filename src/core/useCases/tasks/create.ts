import { ITask } from "../../entities";

export function createNewTaskInteractor(id: number, description: string): ITask {
  if (!description.trim()) throw new Error(`Description can't be empty`)
  return {
    id,
    description,
    completed: false,
  };
}
