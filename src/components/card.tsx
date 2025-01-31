import { FC } from "react";
import { Todo } from "../types/todo";

import { Link } from "react-router-dom";

interface test {
  todo: Todo;
}
//props för att kontrollera när modal ska öppnas och spara todo i state
const Card: FC<test> = ({ todo }) => {
  return (
    <li className="flex justify-start list-none">
      <Link to={`/details/${todo.id}`}>
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
          {/* <Button
            text="Edit"
            onClick={() => {
              setOpen(true);
              setTodo(todo);
            }}
          /> */}
        </div>
      </Link>
    </li>
  );
};

export default Card;
//() => editTodo(t)
