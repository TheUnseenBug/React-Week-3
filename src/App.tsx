import "./App.css";
import { useEffect, useState } from "react";
import useTodoStore from "./store/activityStore.ts";
import Card from "./components/card.tsx";

import Button from "./components/button";
import { Todo } from "./types/todo.ts";
import Forms from "./components/forms.tsx";
import Modal from "./components/modal.tsx";
import axios from "axios";

// Load environment variables
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

function App() {
  const { todos, addTodo, editTodo } = useTodoStore();
  const [open, setOpen] = useState(false);
  const [todo, setTodo] = useState<Todo>();
  //Tanke lägga till api som söker efter bild till stad användare skriver

  //Om modal stängs så sätter vi todo till undefined
  useEffect(() => {
    if (open === false) {
      setTodo(undefined);
    }
  }, [setOpen, open]);

  useEffect(() => {
    const fetchImages = async () => {
      for (const todo of todos) {
        if (!todo.image) {
          // Fetch images from Unsplash
          try {
            const response = await axios.get(
              `https://api.unsplash.com/search/photos`,
              {
                params: { query: todo.city },
                headers: {
                  Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
                },
              }
            );
            editTodo({
              ...todo,
              image: response.data.results[0].urls.regular,
            });
            console.log(response.data.results);
          } catch (error) {
            console.error("Error fetching images:", error);
          }
        }
      }
    };

    fetchImages();
  }, [todos]); // Add todos as a dependency to re-fetch when it changes

  return (
    <main className="h-screen p-4 font-mono text-white bg-slate-700">
      <Modal open={open} setOpen={setOpen}>
        <Forms
          setOpen={setOpen}
          todo={todo}
          editTodo={editTodo}
          addTodo={addTodo}
          setTodo={setTodo}
        />
      </Modal>
      <Button text="Add" onClick={() => setOpen(true)} />

      <section>
        <ul className="grid grid-cols-4 gap-8 px-5">
          {todos.map((t: Todo, i) => (
            <Card key={i} todo={t} setOpen={setOpen} setTodo={setTodo} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
