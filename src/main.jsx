import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { VizContextProvider } from "./Context/vizcontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <VizContextProvider>
    <App />
  </VizContextProvider>
);
