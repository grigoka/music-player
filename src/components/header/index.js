import React from "react";
import "./style.css";
import { headernav } from "../../constants";

export default function Header() {
  return (
    <header className="header">
      <div className="head">
        <div className="logo-wraper">
          <span className="logo">Musicall</span>
        </div>
        {/* <ul className="nav">
          {headernav.map((link) => {
            return (
              <li className="link">
                <a href={link.href}>{link.text}</a>
              </li>
            );
          })}
        </ul> */}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
