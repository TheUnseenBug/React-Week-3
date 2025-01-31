// src/components/Details.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Todo } from "../types/todo";
import useTodoStore from "../store/activityStore";
import Card from "../components/card";

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<Todo>();
  const [loading, setLoading] = useState(true);
  const { getTodo } = useTodoStore();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = id ? await getTodo(id) : undefined;
        if (response) {
          setData(response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>No data found.</p>;
  }
  return (
    <main>
      <section className="m-4 ">
        <h1 className="text-xl font-bold">
          Information för resa till: {data.city}
        </h1>
        <Card todo={data} />
      </section>
    </main>
  );
};

export default Details;
