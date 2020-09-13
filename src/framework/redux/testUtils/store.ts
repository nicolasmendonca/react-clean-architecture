import { createStore, combineReducers } from 'redux';
import { tasks } from '../task/task.reducer';
import { Task } from '../../../core/entities/Task';

export interface StoreState {
  tasks: Task[];
}

export const createTestStore = (preloadedState: Partial<StoreState> = {}) =>
  createStore(
    combineReducers({
      tasks,
    }),
    preloadedState
  );
