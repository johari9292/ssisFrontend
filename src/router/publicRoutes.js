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
import Home from "../pages/Home";
import About from "../pages/About";
import Programs from "../pages/Programs";
import Alumni from "../pages/Alumni";
import Apply from "../pages/Apply";
import Course from "../pages/Programs/components/Course";
import LoginPage from "../pages/Auth/Login";

export default function MainRoute() {
  return (
    // <Router>

    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/programs-and-courses" element={<Programs />} />
      <Route path="/alumni" element={<Alumni />} />
      <Route path="/apply-and-enroll" element={<Apply />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/programs-and-courses/:id"
        element={
          <RequireAuth>
            <Course />
          </RequireAuth>
        }
      />
    </Routes>
  );
}

let AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  let [user, setUser] = React.useState(null);

  let signin = (newUser, callback) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

function useAuth() {
  return React.useContext(AuthContext);
}

function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

const fakeAuthProvider = {
  isAuthenticated: false,
  signin(callback) {
    fakeAuthProvider.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },
  signout(callback) {
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export { useAuth };
