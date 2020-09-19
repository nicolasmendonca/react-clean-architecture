import { createTaskInteractor } from "..";

describe("task > createTask interactor", () => {
  it("throws an error if description is empty", () => {
    const createTask = () => createTaskInteractor(1, "");
    expect(createTask).toThrowError(`Description can't be empty`);
  });

  it("sets the complete attribute to false", () => {
    expect(createTaskInteractor(1, "description").completed).toBe(false);
  });

  it("correctly maps the attributes from the task", () => {
    expect(createTaskInteractor(2, "description 2")).toEqual({
      id: 2,
      description: "description 2",
      completed: false,
    });
  });
});
