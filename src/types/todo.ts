export interface Todo {
    id: string;
    title: string;
    activities: string[];
    date: Date;
    city: string;
}

export interface TodoStore {
    todos: Todo[];
    addTodo: (todo: Todo) => void;
    removeTodo: (id: string) => void;
    toggleTodo: (id: string) => void;
  }