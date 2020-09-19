import { fetchUserTasksInteractor } from "..";
import { createTaskInteractor } from "../createTaskInteractor";

describe("tasks > fetchUserTasks interactor", () => {
  it("calls the fetchTasksService with the given userId", async () => {
    const task = createTaskInteractor(1, "description");
    const userId = 99;
    const fetchTasksService = jest.fn().mockResolvedValue(task);
    await fetchUserTasksInteractor(fetchTasksService, userId);
    expect(fetchTasksService).toHaveBeenCalledTimes(1);
    expect(fetchTasksService).toHaveBeenCalledWith(userId);
  });
});
