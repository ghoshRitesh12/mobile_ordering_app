import React from "react";
import App from "./App.jsx";
import "./assets/css/tailwind.css";
import { createRoot } from "react-dom/client";

const rootElement = document.querySelector("#root");
const reactRoot = createRoot(rootElement);

reactRoot.render(<App />);
