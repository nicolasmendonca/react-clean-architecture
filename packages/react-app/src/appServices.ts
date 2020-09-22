import { createFetchUserTasksService } from '@app/core';
import { userTasksFetchRepository } from '@app/repositories/dist';

export const appServices = {
  fetchUserTasksService: createFetchUserTasksService(userTasksFetchRepository),
};
