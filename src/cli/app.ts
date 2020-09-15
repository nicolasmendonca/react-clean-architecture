import {
  createFetchUserTasksService,
  tasksActions,
  tasksSelectors,
  createStore,
  // fetchUserTasksInteractor,
  // toggleTaskCompletedInteractor,
} from "../core";
import { userTasksAPIRepository } from "../repositories/userTasksAxios";

// WITH REDUX
async function main() {
  const store = createStore({
    fetchUserTasksService: createFetchUserTasksService(userTasksAPIRepository),
  });
  await store.dispatch(tasksActions.fetchUserTasks(1));
  console.warn(`fetched ${store.getState().tasks.ids.length} tasks`)
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

// WITHOUT REDUX
// async function main() {
//   const tasks = await fetchUserTasksInteractor(createFetchUserTasksService(userTasksAPIRepository), 1);
//   console.warn(`fetched ${tasks.length} tasks`)
//   const task1 = tasks.find(task => task.id === 1)!;
//   console.warn(task1);
//   const updatedTask = toggleTaskCompletedInteractor(task1, true);
//   console.warn(updatedTask)
// }

main();
