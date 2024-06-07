import React from "react";
import { IconContext } from "react-icons";
import { NavLink } from "react-router-dom";
import "./sidebarButton.css";

export default function SidebarButton(props) {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) => (isActive ? "btn-body active" : "btn-body")}
    >
      <IconContext.Provider value={{ size: "24px", className: "btn-icon" }}>
        {props.icon}
        <p className="btn-title">{props.title}</p>
      </IconContext.Provider>
    </NavLink>
  );
}
