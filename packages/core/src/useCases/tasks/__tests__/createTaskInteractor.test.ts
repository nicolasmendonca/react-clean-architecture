import { createTaskInteractor } from "..";

describe("task > createTask interactor", () => {
  it("throws an error if description is empty", () => {
    const createTask = () => createTaskInteractor({ id: 1, description: "" });
    expect(createTask).toThrowError(`Description can't be empty`);
  });

  it("sets the complete attribute to false", () => {
    expect(
      createTaskInteractor({ id: 1, description: "description" }).completed
    ).toBe(false);
  });

  it("correctly maps the attributes from the task", () => {
    expect(
      createTaskInteractor({ id: 2, description: "description 2" })
    ).toEqual({
      id: 2,
      description: "description 2",
      completed: false,
    });
  });
});
