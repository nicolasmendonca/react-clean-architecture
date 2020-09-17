import {
  createFetchUserTasksService,
  fetchUserTasksInteractor,
  toggleTaskCompletedInteractor,
} from "@app/core";
import { userTasksAxiosRepository } from "@app/repositories";

// WITHOUT REDUX
async function main() {
  const tasks = await fetchUserTasksInteractor(
    createFetchUserTasksService(userTasksAxiosRepository),
    1
  );
  console.warn(`fetched ${tasks.length} tasks`);
  const task1 = tasks.find((task) => task.id === 1)!;
  console.warn(task1);
  const updatedTask = toggleTaskCompletedInteractor(task1, true);
  console.warn(updatedTask);
}

main();
