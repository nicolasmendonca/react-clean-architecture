import * as React from "react";
import produce from 'immer';
import { ITask, toggleTaskCompletedInteractor } from "@app/core";
import { appServices } from './appServices';
import { TaskCreator } from "./TaskCreator";
import { TaskList } from "./TaskList";
import "./tailwind.output.css";
import "./styles.scss";
import FetchFromServerButton from './FetchFromServerButton';
import { asyncReducer, AsyncReducerActionTypes, AsyncStates } from './asyncReducer';
import { useImmer } from 'use-immer';

type TaskDictionary = { [id: number]: ITask }

const App: React.FC = () => {
  const [tasksMap, setTasks] = useImmer<TaskDictionary>({})
  const [asyncState, dispatch] = React.useReducer(asyncReducer, AsyncStates.IDLE);

  const addTask = (submittedTask: ITask) => {
    setTasks(oldTasks => produce(oldTasks, tasks => {
      tasks[submittedTask.id] = submittedTask
    }))
  }
  const fetchFromServer = async () => {
    dispatch({
      type: AsyncReducerActionTypes.BEGIN
    })
    try {
      const result = await appServices.fetchUserTasksService(1)
      const taskMap: TaskDictionary = result.reduce((taskMap, task) => {
        taskMap[task.id] = task;
        return taskMap
      }, {} as TaskDictionary)
      setTasks(() => taskMap)
      dispatch({
        type: AsyncReducerActionTypes.RESOLVE
      })
    } catch (e) {
      dispatch({
        type: AsyncReducerActionTypes.REJECT
      })
    }
  }
  const toggleTaskCompleted = (task: ITask) => {
    setTasks(tasks => {
      toggleTaskCompletedInteractor(tasks[task.id], !task.completed)
    })
  }
  const removeTask = (task: ITask) => {
    setTasks(tasks => {
      delete tasks[task.id]
    })
  }
  return (
      <div
        className="h-screen overflow-hidden flex"
        style={{ background: "#edf2f7" }}
      >
        <div className="h-100 w-full flex justify-center bg-teal-lightest font-sans">
          <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
            <div className="flex justify-between align-center">
              <h1 className="block text-xl text-gray-900 w-3/5">Todo List <span className="text-sm">(yes, another one)</span></h1>
              <FetchFromServerButton onClick={fetchFromServer} asyncState={asyncState} type="button" className="flex-no-shrink w-2/5"/>
            </div>
            <TaskCreator onTaskCreated={addTask} />
            <TaskList tasks={Object.values(tasksMap)} onToggleTaskCompleted={toggleTaskCompleted} onRemoveTask={removeTask} />
          </div>
        </div>
      </div>
  );
};

export default App;
