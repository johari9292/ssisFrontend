import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AppRouter from "./router";

function App() {
  return (
    <Router>
      {/* <Routes> */}
      <AppRouter />
      {/* </Routes> */}
    </Router>
  );
}

export default App;
