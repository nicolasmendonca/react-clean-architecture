import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { taskSelector, tasksActions } from "../redux/task.slice";

export const TaskList: React.FC = () => {
  const taskList = useSelector(taskSelector);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(tasksActions.fetchUserTasks(1));
  }, [dispatch]);

  return (
    <ul>
      {taskList.map((task) => {
        const onToggleCompleted = () =>
          dispatch(
            tasksActions.toggleTaskCompleted({
              taskId: task.id,
              completed: !task.completed,
            })
          );
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
