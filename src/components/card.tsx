import { FC } from "react";
import { Todo } from "../types/todo";
import Button from "./button";

interface test {
  todo: Todo;
  setOpen: (open: boolean) => void;
  setTodo: (todo: Todo) => void;
}
//props för att kontrollera när modal ska öppnas och spara todo i state
const Card: FC<test> = ({ todo, setOpen, setTodo }) => {
  return (
    <li>
      <div
        className="flex flex-col items-center px-4 font-semibold text-white bg-blue-500 rounded-md "
        key={todo.id}
      >
        <div className="flex justify-center gap-6">
          <p>{todo.city}</p>
          <p>{todo.date}</p>
        </div>
        <img src={todo.image} alt="city" className="w-64 h-64" />
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
