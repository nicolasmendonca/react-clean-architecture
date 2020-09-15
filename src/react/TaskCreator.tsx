import React from "react";
import { tasksActions } from "../core";
import { useDispatch } from "react-redux";

export const TaskCreator: React.FC = () => {
  const [description, setDescription] = React.useState("");
  const dispatch = useDispatch();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        try {
          dispatch(tasksActions.createTask(description));
          setDescription("");
        } catch (error) {
          alert(error.message);
        }
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
