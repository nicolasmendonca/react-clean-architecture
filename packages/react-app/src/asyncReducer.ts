
export enum AsyncStates {
  IDLE = 'IDLE',
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export enum AsyncReducerActionTypes {
  RESET = 'RESET',
  BEGIN = 'BEGIN',
  RESOLVE = 'RESOLVE',
  REJECT = 'REJECT'
}

type AsyncReducerActions = {
  type: AsyncReducerActionTypes
}

export function asyncReducer(_: AsyncStates, action: AsyncReducerActions) {
  switch (action.type) {
    case AsyncReducerActionTypes.RESET:
      return AsyncStates.IDLE;
    case AsyncReducerActionTypes.BEGIN:
      return AsyncStates.PENDING
    case AsyncReducerActionTypes.RESOLVE:
      return AsyncStates.SUCCESS;
    case AsyncReducerActionTypes.REJECT:
      return AsyncStates.ERROR;
  }
}
