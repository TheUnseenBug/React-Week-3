
import { create } from 'zustand';
import { Todo, TodoStore } from '../types/todo';

const useTodoStore = create<TodoStore>((set) => ({
  todos: [],

//Lägga till stad sen todo i sen aktiviteter i stad lista?

  // Lägger till todo i listan
  addTodo: (todo: Todo) =>
    set((state) => ({
      todos: [...state.todos, { id: "1", title: todo.title, activities: todo.activities, date: todo.date, city: todo.city }],
    })),


  // Tar bort todo från listan
  removeTodo: (id:string) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));

export default useTodoStore;
