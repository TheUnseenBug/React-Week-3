import { Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./routes";
import New from "./routes/new";
import Details from "./routes/details";
import NoMatch from "./routes/no-match";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/new" element={<New />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
