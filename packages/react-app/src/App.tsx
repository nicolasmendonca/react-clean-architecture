import * as React from "react";
import { Provider } from "react-redux";
import { createStore, createFetchUserTasksService } from "@app/core";
import { userTasksFetchRepository } from "@app/repositories";
import { StoreType } from "./reduxStore";

import { TaskCreator } from "./TaskCreator";
import { TaskList } from "./TaskList";
import "./tailwind.output.css";
import "./styles.scss";
import FetchFromServerButton from './FetchFromServerButton';

export const store = createStore({
  fetchUserTasksService: createFetchUserTasksService(userTasksFetchRepository),
});

const App: React.FC<{ store: StoreType }> = ({ store }) => {
  return (
    <Provider store={store}>
      <div
        className="h-screen overflow-hidden flex"
        style={{ background: "#edf2f7" }}
      >
        <div className="h-100 w-full flex justify-center bg-teal-lightest font-sans">
          <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
            <div className="flex justify-between align-center">
              <h1 className="block text-xl text-gray-900 w-3/5">Todo List <span className="text-sm">(yes, another one)</span></h1>
              <FetchFromServerButton type="button" className="flex-no-shrink w-2/5"/>
            </div>
            <TaskCreator />
            <TaskList />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
