import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { connect } from "react-redux";

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
          className={["navigation-element", `${!props.signing ? "" : "active"}`, `${!props.isVisible ? "invisible" : ""}`].join(' ')}
        >
          {props.children}
        </Link>
      }
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    isVisible: state.burgerBuilder.isVisible
  };
};

export default connect(
  mapStateToProps,
  null
)(navigationElement);
