import React from 'react';
import { useTask } from '../react-redux/task/useTask';

export const TaskList: React.FC = () => {
  const { taskList, toggleCompleted } = useTask();
  return (
    <ul>
      {taskList.map((task) => {
        const onToggleCompleted = () =>
          toggleCompleted(task.id, !task.completed);
        return (
          <li key={task.id}>
            {task.description}
            {task.completed ? (
              <button type="button" onClick={onToggleCompleted}>
                Unmark as completed
              </button>
            ) : (
              <button type="button" onClick={onToggleCompleted}>
                Mark as completed
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};
