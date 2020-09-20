import { toggleTaskCompletedInteractor } from "..";
import { createTaskInteractor } from "../createTaskInteractor";

describe("task > toggleCompleted interactor", () => {
  test("changes the completed attribute for a task", () => {
    const task = createTaskInteractor({ id: 1, description: "description" });
    expect(task.completed).toBe(false);
    expect(toggleTaskCompletedInteractor(task, true).completed).toBe(true);
  });
});
