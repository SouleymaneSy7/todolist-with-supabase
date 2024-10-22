import React, { FormEvent } from "react";
import Inputs from "./Inputs";
import useTodoStore from "../store/todoStore";
import { LinkIcon } from "../Icons/Icons.component";

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
      className="flex items-center justify-between gap-4 mb-7 bg-color-secondary-light px-5 h-12 md:h-14"
      onSubmit={handleSubmit}
    >
      <LinkIcon className=" fill-color-elements-light w-6 h-6" />
      <Inputs
        type={"text"}
        id={inputID}
        placeholder="Create a new todo..."
        className="w-full bg-color-secondary-light h-full placeholder:text-fs-base"
        value={task}
        onChange={(event) => {
          setTask(event.target.value);
        }}
      />
    </form>
  );
};

export default InputForm;
