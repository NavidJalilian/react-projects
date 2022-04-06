import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";

const Sidebar = () => {
  return (
    <aside className={`sidebar show-sidebar`}>
      <div className="sidebar-header">
        <img src={logo} className="logo" alt="logo" />
        <button className="close-btn">
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.url}>
              {link.icon}
              <span>{link.text}</span>
            </a>
          </li>
        ))}
      </ul>
      <ul className="social-icons">
        {social.map((social) => (
          <li key={social.id}>
            <a href={social.url}>{social.icon}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
