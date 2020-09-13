import { Task } from '../entities/Task';

interface ITaskPrimitives {
  id: number;
  description: string;
  completed: boolean;
}

export class TaskCreatorInteractor {
  public createTask({ id, description, completed }: ITaskPrimitives): Task {
    return new Task(id, description, completed);
  }
}
