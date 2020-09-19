import { ITask } from "..";

describe("Task entity", () => {
  const task: ITask = {
    id: 1,
    description: "description",
    completed: true,
  };

  it("contains an id", () => {
    expect(task.id).toBe(1);
    expect(task.description).toBe("description");
    expect(task.completed).toBe(true);
  });
});
