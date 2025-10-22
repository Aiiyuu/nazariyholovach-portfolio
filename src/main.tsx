import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Root from "./Roots";
import "./styles/index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
