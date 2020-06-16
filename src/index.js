import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import "./tailwind.generated.css";
import { BooksProvider } from "./context/BooksContext";

ReactDOM.render(
  <React.StrictMode>
    <BooksProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BooksProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
