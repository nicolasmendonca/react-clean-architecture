import React from 'react'
import { tasksActions } from '@app/core';
import { useDispatch } from 'react-redux';

enum AsyncStates {
  IDLE = 'IDLE',
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

enum AsyncReducerActionTypes {
  RESET = 'RESET',
  BEGIN = 'BEGIN',
  RESOLVE = 'RESOLVE',
  REJECT = 'REJECT'
}

type AsyncReducerActions = {
  type: AsyncReducerActionTypes
}

function asyncReducer(state: AsyncStates, action: AsyncReducerActions) {
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

interface IFetchFromServerButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
{}

const FetchFromServerButton: React.FC<IFetchFromServerButtonProps> = ({ className, ...props }) => {
  const dispatch = useDispatch();
  const [asyncState, asyncDispatch] = React.useReducer(asyncReducer, AsyncStates.IDLE)
  const handleButtonClicked = async () => {
    asyncDispatch({ type: AsyncReducerActionTypes.BEGIN })
    try {
      await dispatch(tasksActions.fetchUserTasks(1))
      asyncDispatch({ type: AsyncReducerActionTypes.RESOLVE })
    } catch (e) {
      asyncDispatch({ type: AsyncReducerActionTypes.REJECT })
    }
  }
  return (
    <button onClick={handleButtonClicked} className={`${className} p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-600 border-green-600 hover:bg-green-600`} {...props}>
      {asyncState === AsyncStates.PENDING && `Loading`}
      {asyncState === AsyncStates.IDLE && 'Fetch from server'}
      {asyncState === AsyncStates.ERROR && 'An error occurred'}
      {asyncState === AsyncStates.SUCCESS && 'Fetched successfully'}
    </button>
  )
}

export default FetchFromServerButton
