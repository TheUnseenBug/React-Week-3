import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// Lazy load components
const Index = lazy(() => import("./routes"));
const New = lazy(() => import("./routes/new"));
const Details = lazy(() => import("./routes/details"));
const NoMatch = lazy(() => import("./routes/no-match"));

function App() {
  return (
    <>
      {/* Wrap Routes in Suspense for lazy loading */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/new" element={<New />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
