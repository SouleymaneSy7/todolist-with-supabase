import React, { FormEvent } from "react";
import Inputs from "./Inputs";
import useTodoStore from "../store/todoStore";

const InputForm: React.FC = () => {
  const id = React.useId();
  const inputID = `text-input-${id}`;

  const [task, setTask] = React.useState("");

  const addTodo = useTodoStore((state) => state.addTodos);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    addTodo(task);
  };

  return (
    <form
      className="container flex  items-center justify-between mb-7"
      onSubmit={handleSubmit}
    >
      <Inputs
        type={"text"}
        id={inputID}
        placeholder="Create a new todo..."
        value={task}
        onChange={(event) => {
          setTask(event.target.value);
        }}
        className="border p-3 w-full"
      />

      <button type="submit" className="p-3 bg-blue-600">
        submit
      </button>
    </form>
  );
};

export default InputForm;
