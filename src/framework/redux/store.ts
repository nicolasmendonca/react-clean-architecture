import { createStore, combineReducers } from 'redux';
import { tasks } from './task/task.reducer';
import { Task } from '../../core/entities/Task';

export interface StoreState {
  tasks: Task[];
}

const initialState: StoreState = {
  tasks: [],
};

export const store = createStore(
  combineReducers({
    tasks,
  }),
  initialState as any
);
