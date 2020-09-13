import { Task } from '../entities/Task';
import { TaskCreatorInteractor } from './TaskCreatorInteractor';
import { createTaskPrimitives } from '../testUtils/Task';

describe('TaskCreatorInteractor', () => {
  describe('createTask', () => {
    it('returns a task', () => {
      const { id, description, completed } = createTaskPrimitives();
      const taskCreator = new TaskCreatorInteractor();
      expect(
        taskCreator.createTask({
          id,
          description,
          completed,
        })
      ).toBeInstanceOf(Task);
    });
  });
});
