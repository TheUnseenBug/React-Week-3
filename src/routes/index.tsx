import { useEffect } from "react";
import useTodoStore from "../store/activityStore.ts";
import Card from "../components/card.tsx";

import { Todo } from "../types/todo.ts";

import axios from "axios";

// Load environment variables
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

function Index() {
  const { todos, editTodo } = useTodoStore();

  useEffect(() => {
    const fetchImages = async () => {
      for (const todo of todos) {
        if (!todo.image) {
          // Fetch images from Unsplash based on city name and chooses first result

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
    <>
      <main className="h-screen p-4 font-mono text-white bg-slate-700">
        <section>
          <ul className="grid grid-cols-4 gap-8 px-5">
            {todos.map((t: Todo, i) => (
              <Card key={i} todo={t} />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Index;
