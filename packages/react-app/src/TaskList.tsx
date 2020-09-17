import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Switch from "react-switch";
import { ITask, StoreState, tasksSelectors, tasksActions } from "@app/core";

export const TaskList: React.FC = () => {
  const taskList = useSelector<StoreState, ITask[]>((state) =>
    tasksSelectors.selectAll(state.tasks)
  );
  const dispatch = useDispatch();

  return (
    <div className="TasksList">
      <ul>
        {taskList.map((task) => {
          const onToggleCompleted = () => {
            try {
              dispatch(
                tasksActions.toggleTaskCompleted({
                  taskId: task.id,
                  completed: !task.completed,
                })
              );
            } catch (e) {
              alert(e.message);
            }
          };
          return (
            <li key={task.id}>
              <Switch onChange={onToggleCompleted} checked={task.completed} />
              {task.description}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
