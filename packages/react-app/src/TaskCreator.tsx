import React from "react";
import { tasksActions } from "@app/core";
import { useDispatch } from "react-redux";

export const TaskCreator: React.FC = () => {
  const [description, setDescription] = React.useState("");
  const [error, setError] = React.useState("");
  const dispatch = useDispatch();
  return (
    <form
      className="TaskCreator"
      onSubmit={(e) => {
        e.preventDefault();
        try {
          dispatch(tasksActions.createTask({ description }));
          setDescription("");
          setError("");
        } catch (caughtError) {
          setError(caughtError.message);
        }
      }}
    >
      <div className="TaskCreator__input-container">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {error && <p className="TaskCreator__input-error">Error: {error}</p>}
      </div>
      <button
        type="button"
        onClick={() => dispatch(tasksActions.fetchUserTasks(1))}
      >
        Fetch Tasks
      </button>
    </form>
  );
};
