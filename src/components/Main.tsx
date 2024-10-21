/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import useTodoStore from "../store/todoStore";

import Todolist from "./Todolist";
import InputForm from "./InputForm";
import Buttons from "./Buttons";

const filter = ["All", "Active", "Completed"];

const Main: React.FC = () => {
  const [filterOption, setFilterOption] = React.useState(filter[0]);

  const getTodos = useTodoStore((state) => state.getTodos);
  const todos = useTodoStore((state) => state.todos);

  React.useEffect(() => {
    getTodos();
  }, []);

  const filteredTodos = React.useMemo(() => {
    switch (filterOption) {
      case "Active": {
        const unCompletedTodos = todos?.filter((todo) => !todo.is_complete);
        return unCompletedTodos;
      }
      case "Completed": {
        const completedTodos = todos?.filter((todo) => todo.is_complete);
        return completedTodos;
      }
      default:
        return todos;
    }
  }, [filterOption, todos]);

  const taskRemainTerm = todos.length !== 1 ? "items" : "item";
  const remainTask = () => {
    return todos.filter((task) => !task.is_complete).length;
  };

  return (
    <main className="container px-8">
      <InputForm />

      <div className="flex justify-center items-center gap-9 mb-5">
        <div>
          <p>
            {remainTask()} {taskRemainTerm} Left
          </p>
        </div>
        {filter.map((f, index) => (
          <Buttons
            type={"button"}
            key={index}
            className=" p-4 text-blue-700 border border-blue-700 "
            onClick={() => {
              setFilterOption(f);
              console.log(filterOption);
            }}
          >
            {f}
          </Buttons>
        ))}

        <Buttons type={"button"}>
          Clear Completed
        </Buttons>
      </div>

      {filteredTodos.map((todo) => (
        <React.Fragment key={todo.id}>
          <Todolist
            id={todo.id}
            task={todo.task}
            is_complete={todo.is_complete}
          />
        </React.Fragment>
      ))}
    </main>
  );
};

export default Main;
