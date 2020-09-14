import * as React from "react";
import { Provider } from "react-redux";
import { createStore } from "../redux/store";
import { TaskCreator } from "./TaskCreator";
import { TaskList } from "./TaskList";
import "./styles.css";
import { createUserTasksService } from "../../services";
import { userTasksAPIRepository } from "../../repositories/userTasks";

export const store = createStore({
  fetchUserTasksService: createUserTasksService(userTasksAPIRepository),
});

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
