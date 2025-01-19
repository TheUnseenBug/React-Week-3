import { FC } from "react";

interface props {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: FC<props> = ({ text, onClick, type }) => {
  return (
    <button
      type={type ? type : "button"}
      onClick={onClick}
      className="px-2 py-1 text-xs font-semibold text-white bg-indigo-600 rounded-sm shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {text}
    </button>
  );
};

export default Button;
