import "./App.css";
import React, { useState } from "react";
import useTodoStore from "./store/activityStore.ts";
import Card from "./components/card.tsx";
import Modal from "./components/modal.tsx";
import { Todo } from "./types/todo.ts";
function App() {
  const { todos, addTodo, editTodo, removeTodo } = useTodoStore();
  const [open, setOpen] = useState(false);
  const [todo, setTodo] = useState<Todo>();
  //Tanke lägga till api som söker efter bild till stad användare skriver
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const inputElement = form.elements.namedItem("addCity") as HTMLInputElement;
    const value = inputElement?.value.trim();
    if (value) {
      addTodo({
        id: Math.random().toString(),
        city: value,
      });
      inputElement.value = "";
    }
  };

  return (
    <main className="bg-slate-600">
      <Modal
        open={open}
        setOpen={setOpen}
        editTodo={editTodo}
        removeTodo={removeTodo}
      />
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center gap-3 p-3 text-white"
      >
        <label id="addCity">Add destination here</label>
        <input
          id="addCity"
          className="block w-full px-3 bg-white py-1.5 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md"
          type="text"
          placeholder="Add destination"
        />
        <button
          className="block  px-3 bg-white py-1.5 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md"
          type="submit"
        >
          Submit
        </button>
      </form>
      <section>
        <ul className="grid grid-cols-4 gap-8">
          {todos.map((t: Todo) => (
            <Card todo={t} setOpen={setOpen} setTodo={setTodo} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
