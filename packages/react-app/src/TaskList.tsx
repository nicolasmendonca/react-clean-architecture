import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ITask, StoreState, tasksSelectors, tasksActions } from "@app/core"

export const TaskList: React.FC = () => {
  const taskList = useSelector<StoreState, ITask[]>((state) =>
    tasksSelectors.selectAll(state.tasks)
  );
  const dispatch = useDispatch();

  return (
      <ul className="mt-3">
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
              <button onClick={() => dispatch(tasksActions.removeTask({ taskId: task.id }))} className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-600 border-red-600 hover:text-white hover:bg-red-600 w-1/5">Remove</button>
            </li>
          );
        })}
      </ul>
  );
};
