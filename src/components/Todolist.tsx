import React from "react";
import Inputs from "./Inputs";
import Buttons from "./Buttons";
import useTodoStore from "../store/todoStore";

type TodosTypes = {
  id: number;
  task: string;
  is_complete: boolean;
};

const Todolist: React.FC<TodosTypes> = ({ id, task, is_complete }) => {
  const [checked, setChecked] = React.useState(is_complete);
  const completedTodos = useTodoStore((state) => state.completeTodos);
  const deleteTodos = useTodoStore((state) => state.deleteTodos);

  console.log(checked);

  return (
    <div className="flex w-full justify-between items-center p-4 border bg-slate-600 text-white mb-2">
      <Inputs
        type={"checkbox"}
        checked={checked}
        onChange={() => {
          setChecked(!checked);
          completedTodos(id, !checked);
        }}
        className={`w-8 h-8 id-${id}`}
      />

      <p>{task}</p>

      <Buttons
        type={"button"}
        className={`some-${id}`}
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
