import "@/styles/globals.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app.tsx";
import { ScrollHashUpdater } from "./components/scroll-hash-updater.ts";
import { WebGlChecker } from "./components/webgl-checker.tsx";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <WebGlChecker />
    <ScrollHashUpdater />
    <App />
  </React.StrictMode>,
);
