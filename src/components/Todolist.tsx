import React from "react";

import useTodoStore from "../store/todoStore";

import Inputs from "./Inputs";
import Buttons from "./Buttons";

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
    <div className="flex w-full justify-between items-center p-4 border bg-slate-600 text-white mb-2">
      <Inputs
        type={"checkbox"}
        checked={checked}
        onChange={() => {
          setChecked(!checked);
          completedTodos(id, !checked);
        }}
        className={`w-8 h-8`}
      />

      <p>{task}</p>

      <Buttons
        type={"button"}
        onClick={() => {
          deleteTodos(id);
        }}
      >
        Delete
      </Buttons>
    </div>
  );
};

export default Todolist;
