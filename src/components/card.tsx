import { FC } from "react";
import { Todo } from "../types/todo";
import Button from "./button";

interface test {
  todo: Todo;
  setOpen: (open: boolean) => void;
  setTodo: (todo: Todo) => void;
}

const Card: FC<test> = ({ todo, setOpen, setTodo }) => {
  return (
    <li>
      <div
        className="flex flex-col items-center px-4 text-white bg-red-400 rounded-md "
        key={todo.id}
      >
        <div className="flex justify-center gap-6">
          <p>{todo.city}</p>
          <p>{todo.date}</p>
        </div>
        <ul>
          {todo?.activities?.map((activity, index) => (
            <li className="list-disc" key={index}>
              {activity}
            </li>
          ))}
        </ul>
        <Button
          text="Edit"
          onClick={() => {
            setOpen(true);
            setTodo(todo);
          }}
        />
      </div>
    </li>
  );
};

export default Card;
//() => editTodo(t)
