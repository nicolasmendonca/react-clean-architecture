import { taskSelector } from './task.selector';
import { createTask } from '../../../core/testUtils/Task';

describe('taskSelector', () => {
  it('is defined', () => {
    expect(taskSelector).toBeDefined();
  });

  it('returns all tasks', () => {
    const task = createTask();
    expect(
      taskSelector({
        tasks: [task],
      })
    ).toEqual([task]);
  });
});
