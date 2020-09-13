import { Task } from '../../../core/entities/Task';
import { createTask, toggleTaskCompleted } from './task.actions';

describe('taskActions', () => {
  describe('createTask', () => {
    it('is defined', () => {
      expect(createTask).toBeDefined();
    });

    it('returns an AddTaskAction action', () => {
      const { type, payload } = createTask('description');
      expect(type).toBe('ADD_TASK');
      expect(payload).toEqual({
        id: 1,
        description: 'description',
        completed: false,
      });
    });
  });

  describe('toggleTaskCompleted', () => {
    it('is defined', () => {
      expect(toggleTaskCompleted).toBeDefined();
    });

    it('changes the completed state', () => {
      const task = new Task(1, 'description', false);
      const updatedTask = task.clone();
      updatedTask.completed = true;
      expect(toggleTaskCompleted(task, true)).toEqual({
        type: 'UPDATE_TASK',
        payload: {
          taskId: task.id,
          updatedTask,
        },
      });
    });
  });
});
