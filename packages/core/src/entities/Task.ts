export interface ITask {
  id: number;
  description: string;
  completed: boolean;
  deadline?: Date;
}
