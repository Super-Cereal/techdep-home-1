import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { App } from "./components/App/App.tsx";

createRoot(document.getElementById("react-app-root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
