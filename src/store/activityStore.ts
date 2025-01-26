import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import { Todo, TodoStore } from "../types/todo";

//Helper för att spara i localstorage
const customStorage: PersistOptions<TodoStore, TodoStore>['storage'] = {
  getItem: async (name) => {
    const item = localStorage.getItem(name);
    return item ? JSON.parse(item) : null; 
  },
  setItem: async (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: async (name) => {
    localStorage.removeItem(name);
  },
};

const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      todos: [],
      
      
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


      removeTodo: (id: string) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),


      editTodo: (todo: Todo) =>
        set((state) => ({
          todos: state.todos.map((t) =>
            t.id === todo.id ? { ...t, ...todo } : t
          ),
        })),
    }),
    {
      name: "todo-storage", // Localstorage nyckel
      storage: customStorage, // Använda custom storage
    }
  )
);

export default useTodoStore;
