import React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';

export const createStoreProvider = (store: Store): React.FC => ({
  children,
}) => <Provider store={store}>{children}</Provider>;
