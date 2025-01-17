export interface Todo {
    id: string;
    title: string;
    activities: string[];
    date: string;
    city: string;
}

export interface TodoStore {
    todos: Todo[];
    addTodo: (todo: Todo) => void;
    removeTodo: (id: string) => void;
  }