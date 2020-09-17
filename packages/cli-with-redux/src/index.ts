import {
  createFetchUserTasksService,
  tasksActions,
  tasksSelectors,
  createStore,
} from "@app/core";
import { userTasksAxiosRepository } from "@app/repositories";

// WITH REDUX
async function main() {
  const store = createStore({
    fetchUserTasksService: createFetchUserTasksService(
      userTasksAxiosRepository
    ),
  });
  await store.dispatch(tasksActions.fetchUserTasks(1));
  console.warn(`fetched ${store.getState().tasks.ids.length} tasks`);
  const task = tasksSelectors.selectById(store.getState().tasks, 1);
  console.warn(task);
  store.dispatch(
    tasksActions.toggleTaskCompleted({
      taskId: 1,
      completed: true,
    })
  );
  const updatedTask = tasksSelectors.selectById(store.getState().tasks, 1);
  console.warn(updatedTask);
}

main();
