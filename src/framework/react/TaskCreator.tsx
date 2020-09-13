import React from 'react';
import { useTask } from '../react-redux/task/useTask';

export const TaskCreator: React.FC = () => {
  const [description, setDescription] = React.useState('');
  const { createTask } = useTask();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createTask(description);
        setDescription('');
      }}
    >
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </form>
  );
};
