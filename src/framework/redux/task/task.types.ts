import { Task } from '../../../core/entities/Task';

export interface AddTaskAction {
  type: 'ADD_TASK';
  payload: Task;
}

export interface UpdateTaskAction {
  type: 'UPDATE_TASK';
  payload: {
    taskId: number;
    updatedTask: Task;
  };
}

export type TaskActions = AddTaskAction | UpdateTaskAction;
