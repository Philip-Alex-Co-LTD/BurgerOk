import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

const navigationElement = (props) => {

  return (
    <li className="navigation-element">
      {(props.children === `BurgerOk`) ?
        <NavLink
          className = "burgerok-nav"
          to={props.link}
          exact={props.exact}
          activeClassName="active"
        >
          {props.children}
        </NavLink> : 
        <Link
          to={props.path} 
          scroll={el => el.scrollIntoView({block: "start", inline: "nearest"})}
          className={[`${!props.signing ? "" : "active"}`].join(' ')}
        >
          {props.children}
        </Link>
      }
    </li>
  );
};

export default navigationElement;
