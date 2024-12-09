import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
    throw new Error("Root element not found. Check your index.html file.");
  }  
const root = createRoot(rootElement);

root.render(<App />);

