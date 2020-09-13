import { StoreState } from '../store';

export const taskSelector = (store: StoreState) => store.tasks;
