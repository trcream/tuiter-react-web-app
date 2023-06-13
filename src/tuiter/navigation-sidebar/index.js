import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCompass,
  faBell,
  faEnvelope,
  faBookmark,
  faList,
  faUser,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const [ignore, tuiter, active] = pathname.split("/");
  const links = [
    { label: "home", icon: faHome },
    { label: "explore", icon: faCompass },
    { label: "notifications", icon: faBell },
    { label: "messages", icon: faEnvelope },
    { label: "bookmarks", icon: faBookmark },
    { label: "lists", icon: faList },
    { label: "profile", icon: faUser },
    { label: "more", icon: faEllipsisH },
  ];

  return (
    <div className="list-group">
      {links.map((link) => (
        <Link
          key={link.label}
          to={`/tuiter/${link.label}`}
          className={`list-group-item text-capitalize ${
            active === link.label ? "active" : ""
          }`}
        >
          <FontAwesomeIcon
            icon={link.icon}
            style={{ marginRight: "0.75rem" }}
            // className="d-sm-none"
          />
          <span className="d-none d-md-inline">{link.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default NavigationSidebar;
