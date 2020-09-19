import { createFetchUserTasksService, ITodoResponse } from "..";

describe("createFetchUserTasksService", () => {
  it("maps the repository response to an array of tasks", async () => {
    const userId = 24;
    const fetchUserTasksRepository = jest.fn().mockResolvedValue([
      {
        id: 1,
        title: "task title",
        userId,
        completed: false,
      },
    ] as ITodoResponse[]);
    const fetchUserTasksService = createFetchUserTasksService(
      fetchUserTasksRepository
    );
    const result = await fetchUserTasksService(userId);
    expect(result).toEqual([
      {
        id: 1,
        description: "task title",
        completed: false,
      },
    ]);
    expect(fetchUserTasksRepository).toHaveBeenCalledTimes(1);

    // This should be test if a real API was working, lol
    // expect(fetchUserTasksRepository).toHaveBeenCalledWith(userId);
  });
});
