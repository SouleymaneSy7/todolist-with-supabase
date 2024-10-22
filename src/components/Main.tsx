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
  const deleteCompletedTodos = useTodoStore(
    (state) => state.deleteCompletedTodos
  );
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
    <main className="container">
      <InputForm />

      {todos.length > 0 ? (
        <section className="flex justify-center items-center gap-9 mb-5 bg-color-secondary-light dark:bg-color-secondary-dark border border-color-elements-light dark:border-color-elements-dark px-4 py-3 md: p-4">
          <p className="hidden md:inline-block">
            {remainTask()} {taskRemainTerm} Left
          </p>

          <div className="flex gap-8 md:px-8">
            {filter.map((item, index) => (
              <Buttons
                type={"button"}
                key={index}
                className="text-color-text-light dark:text-color-text-dark hover:text-color-primary-light dark:hover:text-color-primary-dark transition-colors"
                onClick={() => {
                  setFilterOption(item);
                }}
              >
                {item}
              </Buttons>
            ))}
          </div>

          <Buttons
            type={"button"}
            className="hidden md:inline-block hover:text-color-primary-light transition-colors"
            onClick={deleteCompletedTodos}
          >
            Clear Completed
          </Buttons>
        </section>
      ) : null}

      <section>
        {filteredTodos.map((todo) => (
          <React.Fragment key={todo.id}>
            <Todolist
              id={todo.id}
              task={todo.task}
              is_complete={todo.is_complete}
            />
          </React.Fragment>
        ))}
      </section>
    </main>
  );
};

export default Main;
