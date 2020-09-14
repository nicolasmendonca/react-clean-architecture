import { ITask } from "../entities";

export function toggleTaskCompleted(task: ITask, completed: boolean) {
  task.completed = completed;
  return task;
}
