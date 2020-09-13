import { createTask } from '../../../core/testUtils/Task';
import { Task } from '../../../core/entities/Task';
import { createTestStore } from '../../redux/testUtils/store';
import { renderHook, act } from '@testing-library/react-hooks';
import { useTask } from './useTask';
import { createStoreProvider } from '../StoreProvider';

describe('useTask', () => {
  it('is defined', () => {
    expect(useTask).toBeDefined();
  });

  describe('createTask', () => {
    const testStore = createTestStore();
    it('creates a task on the store', () => {
      const task = new Task(1, 'description', false);
      const { result } = renderHook(() => useTask(), {
        wrapper: createStoreProvider(testStore),
      });

      act(() => {
        result.current.createTask('description');
      });

      expect(testStore.getState().tasks).toEqual([task]);
    });
  });

  describe('taskList', () => {
    it('returns an array of tasks', () => {
      const task = createTask();
      const { result } = renderHook(() => useTask(), {
        wrapper: createStoreProvider(
          createTestStore({
            tasks: [task],
          })
        ),
      });

      expect(result.current.taskList).toEqual([task]);
    });
  });

  describe('toggleCompleted', () => {
    it('updates the given task completed state', () => {
      const task = createTask();
      const store = createTestStore({
        tasks: [task],
      });
      const { result } = renderHook(() => useTask(), {
        wrapper: createStoreProvider(store),
      });

      act(() => {
        result.current.toggleCompleted(task.id, true);
      });

      expect(store.getState().tasks[0].completed).toBeTruthy();
    });
  });
});
