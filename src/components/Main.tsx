/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Todolist from "./Todolist";
import InputForm from "./InputForm";
import useTodoStore from "../store/todoStore";

const Main: React.FC = () => {
  const getTodos = useTodoStore((state) => state.getTodos);
  const todos = useTodoStore((state) => state.todos);

  React.useEffect(() => {
    getTodos();
  }, []);

  return (
    <main className="container px-8">
      <InputForm />
      {todos.map((todo) => (
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
