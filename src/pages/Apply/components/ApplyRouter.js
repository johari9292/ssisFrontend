import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import Trainings from "./Trainings";
import Webinars from "./Webinars";
import Workshops from "./Workshops";
import Internship from "./Internship";

export default function ApplyRouter() {
  return (
    // <Router>

    <Routes>
      <Route exact path="/apply-and-enroll/:id" element={<Internship />} />

      <Route path="/apply-and-enroll/:id" element={<Webinars />} />

      <Route path="/apply-and-enroll/:id" element={<Workshops />} />
      <Route path="/apply-and-enroll/:id" element={<Trainings />} />
    </Routes>
  );
}
