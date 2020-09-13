import { tasks } from './task.reducer';
import { Task } from '../../../core/entities/Task';
import { createTask } from '../../../core/testUtils/Task';

describe('todosReducer', () => {
  it('starts with an empty array by default', () => {
    expect(tasks(undefined, {} as any)).toEqual([]);
  });

  describe('ADD_TASK', () => {
    expect(
      tasks(undefined, {
        type: 'ADD_TASK',
        payload: createTask(),
      })
    ).toEqual([createTask()]);
  });

  describe('UPDATE_TASK', () => {
    const task = createTask();

    const updatedTask = Task.fromPrimitives({
      ...task.toPrimitives(),
      completed: true,
    });

    expect(
      tasks([task], {
        type: 'UPDATE_TASK',
        payload: {
          taskId: task.id,
          updatedTask: updatedTask,
        },
      })
    ).toEqual([updatedTask]);
  });
});
