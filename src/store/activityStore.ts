import { create } from "zustand";
import { Todo, TodoStore } from "../types/todo";

const useTodoStore = create<TodoStore>((set) => ({
  todos: [],

  //Lägga till stad sen todo i sen aktiviteter i stad lista?

  // Lägger till todo i listan
  addTodo: (todo: Pick<Todo, 'id' | 'city'>) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: todo.id,
          city: todo.city,
        },
      ],
    })),

  // Tar bort todo från listan
  removeTodo: (id: string) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),

  // Redigera todo i listan
  editTodo: (todo:Todo) =>
    set((state) => ({
      todos: state.todos.map((t) =>
        t.id === todo.id ? { ...t, ...todo } : t
      ),
    })),
}));

export default useTodoStore;
