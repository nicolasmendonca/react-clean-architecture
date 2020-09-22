import * as React from "react";
import { Provider } from "react-redux";
import { createStore, createFetchUserTasksService } from "@app/core";
import { userTasksFetchRepository } from "@app/repositories";
import { StoreType } from "./reduxStore";

import { TaskCreator } from "./TaskCreator";
import { TaskList } from "./TaskList";
import "./tailwind.output.css";
import "./styles.scss";

export const store = createStore({
  fetchUserTasksService: createFetchUserTasksService(userTasksFetchRepository),
});

const App: React.FC<{ store: StoreType }> = ({ store }) => {
  return (
    <Provider store={store}>
      <div
        className="h-screen overflow-hidden flex items-center justify-center"
        style={{ background: "#edf2f7" }}
      >
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
          <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
            <h1 className="text-xl text-gray-900">Todo List <span className="text-sm">(yes, another one)</span></h1>
            <TaskCreator />
            <TaskList />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
