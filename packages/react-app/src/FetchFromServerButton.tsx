import React from 'react'
import { AsyncStates } from './asyncReducer';

interface IFetchFromServerButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
{
  asyncState: AsyncStates
}

const FetchFromServerButton: React.FC<IFetchFromServerButtonProps> = ({ asyncState, className, ...props }) => {
  return (
    <button className={`${className} p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-600 border-green-600 hover:bg-green-600`} {...props}>
      {asyncState === AsyncStates.PENDING && `Loading`}
      {asyncState === AsyncStates.IDLE && 'Fetch from server'}
      {asyncState === AsyncStates.ERROR && 'An error occurred'}
      {asyncState === AsyncStates.SUCCESS && 'Fetched successfully'}
    </button>
  )
}

export default FetchFromServerButton
