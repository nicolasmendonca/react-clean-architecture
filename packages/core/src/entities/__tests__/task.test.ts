import { ITask } from "..";

describe("Task entity", () => {
  const task: ITask = {
    id: 1,
    description: "description",
    completed: true,
  };

  it("contains task attributes", () => {
    expect(task.id).toBe(1);
    expect(task.description).toBe("description");
    expect(task.completed).toBe(true);
  });

  it("contains deadline = undefined if it's not set", () => {
    expect(task.deadline).toBeUndefined();
  });

  it("contains a Date deadline if its set", () => {
    const today = new Date();
    const taskWithDeadline: ITask = {
      ...task,
      deadline: today,
    };
    expect(taskWithDeadline.deadline).toEqual(today);
  });
});
