import React from "react";
import { Link } from "react-router-dom";

const NoMatch: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center text-white bg-slate-700">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-4 text-lg">
        Oops! The page you are looking for does not exist.
      </p>
      <Link to="/" className="mt-6 text-blue-400 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default NoMatch;
