import React from "react";
import { NavLink } from "react-router-dom";

const navigationElement = (props) => {

  return (
    <li className="navigation-element">
      {(props.children === `BurgerOk`) ?
        <NavLink
          to={props.link}
          exact={props.exact}
          activeClassName="active"
        >
          {props.children}
        </NavLink> : 
        <div 
          className={[`${!props.signing ? "" : "active"}`].join(' ')}
        >
          {props.children}
        </div>
      }
    </li>
  );
};

export default navigationElement;
