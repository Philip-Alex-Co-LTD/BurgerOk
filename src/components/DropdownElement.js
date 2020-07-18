import React from "react";
import { NavLink } from "react-router-dom";

const dropdownElement = (props) => {
  return (
    <li className="dropdown-element">
        <NavLink 
          className = "dropdown-link"
          to={props.link}
          exact={props.exact}
          activeClassName="active"
        >
          {props.children}
        </NavLink>
    </li>
  );
};

export default dropdownElement;