import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

const navigationElement = (props) => {

  return (
    <li>
      {(props.children === `BurgerOk`) ?
        <NavLink
          className = "navigation-element"
          to={props.link}
          exact={props.exact}
          activeClassName="active"
        >
          {props.children}
        </NavLink> : 
        <Link
          to={props.path} 
          scroll={el => el.scrollIntoView({block: "start", inline: "nearest"})}
          className={["navigation-element", `${!props.signing ? "" : "active"}`].join(' ')}
        >
          {props.children}
        </Link>
      }
    </li>
  );
};

export default navigationElement;
