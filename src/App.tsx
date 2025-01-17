import "./App.css";
import React, { useState } from "react";
import useTodoStore from "./store/activityStore.ts";
import Card from "./components/card.tsx";
function App() {
  // const { todos, addTodo, removeTodo } = useTodoStore();
  // const [newTodo, setNewTodo] = useState("");
  //Tanke lägga till api som söker efter bild till stad användare skriver
  const test = [
    {
      id: "1",
      activities: ["Bygga", "Flyga", "Äta pesto"],
      date: "2001-01-20",
      city: "Bangkok",
    },
    {
      id: "1",
      activities: ["Bygga", "Flyga", "Äta pesto"],
      date: "2001-01-20",
      city: "Bangkok",
    },
    {
      id: "1",
      activities: ["Bygga", "Flyga", "Äta pesto"],
      date: "2001-01-20",
      city: "Bangkok",
    },
  ];

  // const handleAddTodo = () => {
  //   if (newTodo.trim()) {
  //     addTodo();
  //     setNewTodo(""); // Clear the input after adding
  //   }
  // };

  return (
    <main className="bg-slate-600">
      <h1>Todo List</h1>
      <h2>Add destination here</h2>
      <section>
        <ul className="">
          <Card test={test} />
        </ul>
      </section>
    </main>
  );
}

export default App;
