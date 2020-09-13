import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { TaskCreator } from './TaskCreator';
import { TaskList } from './TaskList';
import './styles.css';

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TaskCreator />
        <TaskList />
      </div>
    </Provider>
  );
}
