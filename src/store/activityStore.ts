import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import { Todo, TodoStore } from "../types/todo";

const customStorage: PersistOptions<TodoStore, TodoStore>['storage'] = {
  getItem: async (name) => {
    const item = localStorage.getItem(name);
    return item ? JSON.parse(item) : null; // Parse the JSON string back to an object
  },
  setItem: async (name, value) => {
    localStorage.setItem(name, JSON.stringify(value)); // Stringify the object before storing
  },
  removeItem: async (name) => {
    localStorage.removeItem(name);
  },
};

const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      todos: [],
      
      // Add todo to the list
      addTodo: (todo: Todo) =>
        set((state) => ({
          todos: [
            ...state.todos,
            {
              id: todo.id,
              city: todo.city,
              activities: todo.activities,
              date: todo.date,
            },
          ],
        })),

      // Remove todo from the list
      removeTodo: (id: string) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),

      // Edit todo in the list
      editTodo: (todo: Todo) =>
        set((state) => ({
          todos: state.todos.map((t) =>
            t.id === todo.id ? { ...t, ...todo } : t
          ),
        })),
    }),
    {
      name: "todo-storage", // Name of the storage key
      storage: customStorage, // Use the custom storage
    }
  )
);

export default useTodoStore;
