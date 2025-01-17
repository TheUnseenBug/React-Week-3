import { FC } from "react";

interface props {
  text: string;
  onClick: () => void;
}

const Button: FC<props> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="px-2 py-1 text-xs font-semibold text-white bg-indigo-600 rounded-sm shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {text}
    </button>
  );
};

export default Button;
