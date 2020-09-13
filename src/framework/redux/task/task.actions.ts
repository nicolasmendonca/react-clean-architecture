import { TaskToggleCompleteInteractor } from '../../../core/useCases/TaskToggleCompleteInteractor';
import { TaskCreatorInteractor } from '../../../core/useCases/TaskCreatorInteractor';
import { AddTaskAction, UpdateTaskAction } from './task.types';
import { Task } from '../../../core/entities/Task';

let generatedId = 0;

export const createTask = (description: string): AddTaskAction => {
  const interactor = new TaskCreatorInteractor();
  return {
    type: 'ADD_TASK',
    payload: interactor.createTask({
      id: generatedId += 1,
      completed: false,
      description,
    }),
  };
};

export const toggleTaskCompleted = (
  task: Task,
  completed: boolean
): UpdateTaskAction => {
  const updatedTask = new TaskToggleCompleteInteractor(task).toggleCompleted(
    completed
  );
  return {
    type: 'UPDATE_TASK',
    payload: {
      taskId: task.id,
      updatedTask,
    },
  };
};
