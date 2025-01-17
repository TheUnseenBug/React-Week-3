import React, { FC } from "react";
import { Todo } from "../types/todo";

interface test {
  test: Todo[];
}

const Card: FC<test> = ({ test }) => {
  return (
    <li className="grid grid-cols-2 gap-8">
      {test.map((t: Todo) => (
        <div
          className="flex flex-col items-center px-4 text-white bg-red-400 rounded-md "
          key={t.id}
        >
          <div className="flex justify-center gap-6">
            <p>{t.city}</p>
            <p>{t.date}</p>
          </div>
          <ul>
            {t.activities.map((activity, index) => (
              <li className="list-disc" key={index}>
                {activity}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </li>
  );
};

export default Card;
