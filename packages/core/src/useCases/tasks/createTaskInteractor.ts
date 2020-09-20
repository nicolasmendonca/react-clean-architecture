import { ITask } from "../../entities";

interface CreateTaskInteractorPayload {
  id: number;
  description: string;
  deadline?: Date;
}
export function createTaskInteractor({
  id,
  description,
  deadline,
}: CreateTaskInteractorPayload): ITask {
  if (!description.trim()) throw new Error(`Description can't be empty`);
  return {
    id,
    description,
    completed: false,
    deadline,
  };
}
