import { Task } from '../entities/Task';
import { TaskToggleCompleteInteractor } from './TaskToggleCompleteInteractor';
import { createTask } from '../testUtils/Task';

describe('TaskToggleCompleteInteractor', () => {
  describe('createTask', () => {
    it('returns a task', () => {
      const task = createTask();
      const taskToggler = new TaskToggleCompleteInteractor(task);
      const toggledCompletedTask = taskToggler.toggleCompleted(true);
      expect(toggledCompletedTask).toBeInstanceOf(Task);
      expect(toggledCompletedTask.completed).toBeTruthy();
    });
  });
});
