import React from "react";
import { tasksActions } from "@app/core";
import { useDispatch } from "react-redux";

export const TaskCreator: React.FC = () => {
  const [description, setDescription] = React.useState("");
  const dispatch = useDispatch();
  return (
    <form
      className="flex mt-4"
      onSubmit={(e) => {
        e.preventDefault();
        try {
          dispatch(tasksActions.createTask({ description }));
          setDescription("");
        } catch (caughtError) {
          alert(caughtError.message)
        }
      }}
    >
      <input
        type="text"
        placeholder="Add Todo"
        className="shadow appearance-none border rounded w-4/5 py-2 px-3 mr-4 text-grey-600"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        className="flex-no-shrink w-1/5  p-2 border-2 rounded text-teal-600 border-teal-600 hover:text-white hover:bg-teal"
        type="submit"
      >
        Add Task
      </button>
    </form>
  );
};
