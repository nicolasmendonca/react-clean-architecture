import { store } from './store';

describe('redux store', () => {
  it('is defined', () => {
    expect(store).toBeDefined();
  });

  it('contains a tasks reducer', () => {
    expect(store.getState().tasks).toEqual([]);
  });
});
