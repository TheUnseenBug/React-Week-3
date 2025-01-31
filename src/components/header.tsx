import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-center gap-5 p-5 font-mono text-xl font-semibold text-white bg-blue-500">
        <h1>Travel planner</h1>
        <Link to="/" className="p-2 bg-blue-400 rounded-md">
          <h2>Home</h2>
        </Link>
        <Link className="p-2 bg-blue-400 rounded-md" to="/new">
          <h2>Add Destination</h2>
        </Link>
      </header>
    </>
  );
};

export default Header;
