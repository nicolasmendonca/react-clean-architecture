import { Task } from '../entities/Task';

export class TaskToggleCompleteInteractor {
  constructor(public task: Task) {}

  public toggleCompleted(completed: boolean): Task {
    const updatedTask = this.task.clone();
    updatedTask.completed = completed;
    return updatedTask;
  }
}
