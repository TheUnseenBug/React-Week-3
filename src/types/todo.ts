export interface Todo {
  id: string;
  activities?: string[];
  date?: string;
  city: string;
}

export interface TodoStore {
  todos: Todo[];
  addTodo: (todo: Pick<Todo, 'id' | 'city'>) => void;
  removeTodo: (id: string) => void;
  editTodo: (todo: Todo) => void;
}
