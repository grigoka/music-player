import React, { useState, useEffect } from "react";
import "./sidebar.css";
import SidebarButton from "./sidebarButton";
import { MdSpaceDashboard } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";

export default function Sidebar() {
  const [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
  );

  return (
    <div className="sidebar-container">
      <SidebarButton title="Add" to="/add" icon={<MdSpaceDashboard />} />
      <SidebarButton title="Player" to="/play/0" icon={<FaPlay />} />
      <SidebarButton title="Playlists" to="/playlists" icon={<FaGripfire />} />
    </div>
  );
}
