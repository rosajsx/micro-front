import React from "react";
import { BrowserRouter } from "react-router-dom";
import { LocalRouter } from "./router/localRoutes";

function App() {
  return (
    <BrowserRouter>
      <LocalRouter />
    </BrowserRouter>
  );
}

export default App;
