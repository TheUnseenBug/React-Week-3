
import { create } from 'zustand';
import { Todo, TodoStore } from '../types/todo';

const useTodoStore = create<TodoStore>((set) => ({
  todos: [],

  // Add a new todo
  addTodo: (todo: Todo) =>
    set((state) => ({
      todos: [...state.todos, { id: "1", title: todo.title, activities: todo.activities, date: todo.date, city: todo.city }],
    })),


  // Remove a todo by ID
  removeTodo: (id:string) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),

  // Toggle a todo's completion status
  toggleTodo: (id: string) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo,  } : todo
      ),
    })),
}));

export default useTodoStore;
