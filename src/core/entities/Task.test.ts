import { Task } from './Task';
import { createTaskPrimitives } from '../testUtils/Task';

describe('Task entity', () => {
  it('can create a task', () => {
    const { id, description, completed } = createTaskPrimitives();
    const task = new Task(id, description, completed);

    expect(task).toBeDefined();
    expect(task.id).toBe(id);
    expect(task.description).toBe(description);
    expect(task.completed).toBe(completed);
  });
});
