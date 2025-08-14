import React from "react";
import Login from "./components/login.jsx";
import Dashboard from "./components/dashboard.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { toast, Toaster } from "sonner";
import NotFound from "./Components/notFound.jsx";
import Landing from "./Components/landing.jsx";
import Profile from "./Components/profile.jsx";

export default function App() {
  return (
    <>
      <Toaster richColors />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}
