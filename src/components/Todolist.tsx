import React from "react";

import useTodoStore from "../store/todoStore";

import Inputs from "./Inputs";
import Buttons from "./Buttons";
import { TrashIcon } from "../Icons/Icons.component";

type TodosTypes = {
  id: number;
  task: string;
  is_complete: boolean;
};

const Todolist: React.FC<TodosTypes> = ({ id, task, is_complete }) => {
  const [checked, setChecked] = React.useState(is_complete);
  const completedTodos = useTodoStore((state) => state.completeTodos);
  const deleteTodos = useTodoStore((state) => state.deleteTodos);

  return (
    <div className="flex  items-center gap-4 w-full p-3 border border-color-elements-light dark:border-color-elements-dark bg-color-secondary-light dark:bg-color-secondary-dark  mb-2">
      <Inputs
        type={"checkbox"}
        checked={checked}
        onChange={() => {
          setChecked(!checked);
          completedTodos(id, !checked);
        }}
        className={`w-8 h-8`}
      />

      <p
        className="w-full text-color-text-light dark:text-color-text-dark"
        style={{
          opacity: checked ? "65%" : "100%",
          textDecoration: checked ? "line-through" : "none",
        }}
      >
        {task}
      </p>

      <Buttons
        type={"button"}
        className="w-6 h-7"
        onClick={() => {
          deleteTodos(id);
        }}
      >
        <TrashIcon className="fill-color-text-light dark:fill-color-text-dark" />
      </Buttons>
    </div>
  );
};

export default Todolist;
