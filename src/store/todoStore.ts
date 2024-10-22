/* eslint-disable @typescript-eslint/no-unused-expressions */
import { create } from "zustand";
import supabase from "../configs/supabaseClient";

type TodosTypes = {
  id: number;
  task: string;
  is_complete: boolean;
};

type State = {
  errors: string;
  todos: TodosTypes[];
};

type Actions = {
  addTodos: (task: string) => Promise<void>;
  deleteTodos: (id: number) => Promise<void>;
  getTodos: () => Promise<void>;
  completeTodos: (id: number, isCompleted: boolean) => Promise<void>;
  deleteCompletedTodos: () => Promise<void>;
};

const useTodoStore = create<State & Actions>((set) => ({
  errors: "",
  todos: [],
  getTodos: async (): Promise<void> => {
    try {
      const { data, error } = await supabase
        .from("todos")
        .select("*")
        .order("id", { ascending: false });
      if (error) console.log("Errors - Fetch Todos", error);
      if (data != null) {
        set(() => ({ todos: data as TodosTypes[] }));
      }
    } catch (error) {
      alert(error);
      console.log("Errors - Fetch Todos", error);
    }
  },
  addTodos: async (task: string): Promise<void> => {
    if (task.length <= 3) {
      set(() => ({ errors: "Task length should be more than 3 characters!" }));
    } else {
      const { data, error } = await supabase
        .from("todos")
        .insert({ task: task })
        .single();
      if (error) console.log("Error - Add Todos", error.message);
      if (data != null) {
        set((state) => ({
          todos: [data, ...state.todos],
        })),
          set(() => ({ errors: "" }));
        task = "";
      }

      window.location.reload();
    }
  },
  deleteTodos: async (id: number): Promise<void> => {
    try {
      const { error } = await supabase.from("todos").delete().eq("id", id);
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      }));
      if (error) {
        console.error("Error - Delete Todos", error);
      }
      window.location.reload();
    } catch (error) {
      console.log("Error - Delete Todos", error);
    }
  },
  completeTodos: async (id: number, isCompleted: boolean): Promise<void> => {
    try {
      const { error } = await supabase
        .from("todos")
        .update({ is_complete: isCompleted })
        .eq("id", id)
        .single();
      if (error) {
        console.error(error);
      }
      window.location.reload();
    } catch (error) {
      console.log("Error - Complete Todos", error);
    }
  },
  deleteCompletedTodos: async () => {
    try {
      const { error } = await supabase
        .from("todos")
        .delete()
        .eq("is_complete", true);

      if (error) {
        console.error("Error - Delete Completed Todos", error);
      }

      window.location.reload();
    } catch (error) {
      console.log("Error - Delete Completed Todos", error);
    }
  },
}));

export default useTodoStore;
