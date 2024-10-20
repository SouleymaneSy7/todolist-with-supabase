import { create } from "zustand";

type State = {
  count: number;
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
}));

export default useTodoStore;
