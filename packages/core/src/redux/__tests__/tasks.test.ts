import { tasksSelectors, tasksActions } from "..";
import { createStore } from "../store";
import { createTaskInteractor } from "../../useCases";

type CreatedStore = ReturnType<typeof createStore>;

describe("tasks redux slice", () => {
  const task1Description = "Task 1 description";
  const fetchUserTasksService = jest
    .fn()
    .mockResolvedValue([
      createTaskInteractor(1, "task returned from http response"),
    ]);
  let store: CreatedStore;
  beforeEach(() => {
    store = createStore({
      fetchUserTasksService,
    });
  });

  test("createTask action, reducer & selector", () => {
    expect(tasksSelectors.selectAll(store.getState().tasks)).toHaveLength(0);

    store.dispatch(
      tasksActions.createTask({
        description: task1Description,
      })
    );

    const tasks = tasksSelectors.selectAll(store.getState().tasks);
    expect(tasks).toHaveLength(1);
    expect(tasks[0].description).toEqual(task1Description);
  });

  test("toggleTaskCompleted action, reducer & selector", () => {
    store.dispatch(
      tasksActions.createTask({
        description: task1Description,
      })
    );
    const [createdTask] = tasksSelectors.selectAll(store.getState().tasks);
    store.dispatch(
      tasksActions.toggleTaskCompleted({
        completed: true,
        taskId: createdTask.id,
      })
    );

    const [task] = tasksSelectors.selectAll(store.getState().tasks);
    expect(task.completed).toBeTruthy();
  });

  test("toggleTaskCompleted not found", () => {
    const shouldThrowError = () =>
      store.dispatch(
        tasksActions.toggleTaskCompleted({
          completed: true,
          taskId: 97898798798798,
        })
      );
    expect(shouldThrowError).toThrowError("Task not found");
  });

  test("fetchUserTasks", async () => {
    const userId = 1;
    await store.dispatch(tasksActions.fetchUserTasks(userId));
    const [task] = tasksSelectors.selectAll(store.getState().tasks);
    expect(task.description).toEqual("task returned from http response");
  });
});
