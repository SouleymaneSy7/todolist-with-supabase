import { create } from "zustand";

type TodosTypes = {
  id: number;
  task: string;
  is_complete: false;
};

type State = {
  todos: TodosTypes[];
};

type Actions = {
  addTodos: () => void;
  deleteTodos: () => void;
  getTodos: () => void;
  completeTodos: () => void;
};

const useTodoStore = create<State & Actions>((set) => ({
  todos: [],
  getTodos: () => {},
  addTodos: () => {},
  deleteTodos: () => {},
  completeTodos: () => {},
}));

export default useTodoStore;
