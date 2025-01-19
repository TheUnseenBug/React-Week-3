import "./App.css";
import React, { useState } from "react";
import useTodoStore from "./store/activityStore.ts";
import Card from "./components/card.tsx";
import Modal from "./components/modal.tsx";
import Button from "./components/button";
import { Todo } from "./types/todo.ts";
import Forms from "./components/forms.tsx";
import Modal2 from "./components/modal2.tsx";

function App() {
  const { todos, addTodo, editTodo, removeTodo } = useTodoStore();
  const [open, setOpen] = useState(false);
  const [todo, setTodo] = useState<Todo>();
  //Tanke lägga till api som söker efter bild till stad användare skriver


  return (
    <main className="bg-slate-600">
      <Modal2 open={open} setOpen={setOpen}>
        <Forms
          setOpen={setOpen}
          todo={todo}
          editTodo={editTodo}
          addTodo={addTodo}
        />
      </Modal2>
      <Button text="Add" onClick={() => setOpen(true)} />

      <section>
        <ul className="grid grid-cols-4 gap-8 px-5">
          {todos.map((t: Todo) => (
            <Card todo={t} setOpen={setOpen} setTodo={setTodo} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
