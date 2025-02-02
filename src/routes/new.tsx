import Forms from "../components/forms";
import useTodoStore from "../store/activityStore";
import "../App.css";
const New = () => {
  const { addTodo } = useTodoStore();
  return (
    <main className="h-screen p-4 font-mono text-white bg-slate-700">
      <Forms addTodo={addTodo} />
    </main>
  );
};

export default New;
