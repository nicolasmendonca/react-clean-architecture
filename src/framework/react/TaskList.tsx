import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { tasksSelectors, tasksActions } from "../redux/task.slice";
import { StoreState } from "../redux/store";
import { ITask } from "../../core/entities";

export const TaskList: React.FC = () => {
  const taskList = useSelector<StoreState, ITask[]>((state) =>
    tasksSelectors.selectAll(state.tasks)
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(tasksActions.fetchUserTasks(1));
  }, [dispatch]);

  return (
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
            {task.description}
            {task.completed ? (
              <button type="button" onClick={onToggleCompleted}>
                Pending
              </button>
            ) : (
              <button type="button" onClick={onToggleCompleted}>
                Completed
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};
