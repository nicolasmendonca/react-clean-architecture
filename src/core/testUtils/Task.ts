import { Task } from '../entities/Task';

export const createTaskPrimitives = (): Task => ({
  id: 123,
  description: 'This is the task description',
  completed: true,
});

export const createTask = () => {
  const { id, description, completed } = createTaskPrimitives();
  return new Task(id, description, completed);
};
