import { Task } from '../../../core/entities/Task';
import { TaskActions } from './task.types';

export const tasks = (state: Task[] = [], action: TaskActions): Task[] => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'UPDATE_TASK':
      return state.map((task) =>
        task.id === action.payload.taskId ? action.payload.updatedTask : task
      );
    default:
      return state;
  }
};
