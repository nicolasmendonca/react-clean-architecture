import { ITask } from "../../entities";

export function toggleTaskCompletedInteractor(task: ITask, completed: boolean) {
  task.completed = completed;
  return task;
}
