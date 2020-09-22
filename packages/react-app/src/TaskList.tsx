import React from "react";
import { ITask } from "@app/core"

interface ITaskList {
  tasks: ITask[];
  onToggleTaskCompleted: (task: ITask) => void;
  onRemoveTask: (task: ITask) => void;
}

export const TaskList: React.FC<ITaskList> = ({
  tasks,
  onToggleTaskCompleted,
  onRemoveTask,
}) => {
  return (
      <ul className="mt-3">
        {tasks.map((task) => {
          const onToggleCompleted = () => onToggleTaskCompleted(task);
          const onRemove = () => onRemoveTask(task);
          return (
            <li key={task.id} className="flex mb-4 items-center">
              {task.completed ? (
                <>
                <p className="w-full line-through text-green-600 w-2/5">{task.description}</p>
                <button onClick={onToggleCompleted} type="button" className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-600 border-gray-600 hover:bg-gray-600 w-2/5">Not Done</button>
                </>
              ) : (
                <>
                <p className="w-full text-grey-600 w-2/5">{task.description}</p>
                <button onClick={onToggleCompleted} type="button" className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-600 border-green-600 hover:bg-green-600 w-2/5">Done</button>
                </>
              )}
              <button onClick={onRemove} className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-600 border-red-600 hover:text-white hover:bg-red-600 w-1/5">Remove</button>
            </li>
          );
        })}
      </ul>
  );
};
