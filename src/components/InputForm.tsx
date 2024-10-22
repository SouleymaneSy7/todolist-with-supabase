import React, { FormEvent } from "react";
import Inputs from "./Inputs";
import useTodoStore from "../store/todoStore";
import { LinkIcon } from "../Icons/Icons.component";
import VisuallyHidden from "./VisuallyHidden";

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
      className="flex items-center justify-between gap-4 md:gap-6 mb-7 md:mb-8  bg-color-secondary-light dark:bg-color-secondary-dark pl-5 h-12 border border-color-elements-light dark:border-color-elements-dark md:h-14"
      onSubmit={handleSubmit}
    >
      <LinkIcon className="w-6 h-6 fill-color-elements-light dark:fill-color-elements-dark" />
      <Inputs
        type={"text"}
        id={inputID}
        placeholder="Create a new todo..."
        className="w-full bg-color-secondary-light dark:bg-color-secondary-dark h-full placeholder:text-fs-base placeholder:font-fw-semi-bold outline-none font-fw-semi-bold text-fs-base text-color-text-light dark:text-color-text-dark"
        value={task}
        onChange={(event) => {
          setTask(event.target.value);
        }}
      />
      <VisuallyHidden>Add a task todo</VisuallyHidden>
    </form>
  );
};

export default InputForm;
