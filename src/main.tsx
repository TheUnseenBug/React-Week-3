import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import App from './App.tsx'
import Header from "./components/header.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <App />
    </BrowserRouter>
  </StrictMode>
);
