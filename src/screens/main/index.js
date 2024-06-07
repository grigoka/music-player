import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Playlists from "../playlists";
import Play from "../play";
import Add from "../add";
import Sidebar from "../../components/sidebar";
import "./main.css";

export default function Main() {
  return (
    <Router>
      <div className="main-body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Navigate to="/play/0" />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/play/:index" element={<Play />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </div>
    </Router>
  );
}
