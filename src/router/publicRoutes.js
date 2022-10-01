import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    // <Router>

    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

// You can think of these components as "pages"
// in your app.

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
