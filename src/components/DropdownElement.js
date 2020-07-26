import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const dropdownElement = (props) => {
  return (
    <li className="dropdown-element">
        <NavLink 
          className = {["dropdown-link", `${!props.isSticky ? "white" : "grey"}`].join(' ')}
          to={props.link}
          exact={props.exact}
          activeClassName="active"
        >
          {props.children}
        </NavLink>
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    isSticky: state.burgerBuilder.isSticky
  };
};

export default connect(mapStateToProps)(dropdownElement);