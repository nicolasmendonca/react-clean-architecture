import { useDispatch, useSelector } from 'react-redux';
import { taskSelector } from '../../redux/task/task.selector';
import { createTask, toggleTaskCompleted } from '../../redux/task/task.actions';
import { Task } from '../../../core/entities/Task';

export const useTask = () => {
  const dispatch = useDispatch();
  const taskList: Task[] = useSelector(taskSelector);

  const dispatchCreateTask = (description: string) =>
    dispatch(createTask(description));

  const dispatchToggleTaskCompleted = (taskId: number, completed: boolean) => {
    const task = taskList.find((task) => taskId === task.id);
    if (!task) return;
    dispatch(toggleTaskCompleted(task, completed));
  };

  return {
    createTask: dispatchCreateTask,
    toggleCompleted: dispatchToggleTaskCompleted,
    taskList,
  };
};
