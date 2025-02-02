// src/components/Details.tsx
import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Todo } from "../types/todo";
import useTodoStore from "../store/activityStore";
import Card from "../components/card";
import Button from "../components/button";
import Modal from "../components/modal";
import Forms from "../components/forms";

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<Todo | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const { getTodo, editTodo } = useTodoStore();

  //Fix me UI updateras inte vid editTodo
  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data...");
      setLoading(true); // Set loading to true before fetching
      try {
        const response = id ? await getTodo(id) : undefined;
        if (response) {
          setData(response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchData();
  }, [id, getTodo, editTodo]);

  // Memoize the data to avoid unnecessary re-renders
  const memoizedData = useMemo(() => data, [data]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!memoizedData) {
    return <p>No data found.</p>;
  }

  return (
    <main className="h-screen p-4 font-mono text-white bg-slate-700">
      <section className="m-4 ">
        <h1 className="text-xl font-bold">
          Information för resa till: {memoizedData.city}
        </h1>
        <p>Datum: {memoizedData.date}</p>
        <Button text="Edit" onClick={() => setOpen(true)} />
        <Modal open={open} setOpen={setOpen}>
          <Forms setOpen={setOpen} editTodo={editTodo} todo={memoizedData} />
        </Modal>
        <Card todo={memoizedData} />
      </section>
    </main>
  );
};

export default Details;
