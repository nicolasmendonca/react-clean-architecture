import React from "react";
import { tasksActions } from "../redux/task.slice";
import { useDispatch } from "react-redux";

export const TaskCreator: React.FC = () => {
  const [description, setDescription] = React.useState("");
  const dispatch = useDispatch();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(tasksActions.createTask(description));
        setDescription("");
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
