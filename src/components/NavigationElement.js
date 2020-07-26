import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

const navigationElement = (props) => {

  return (
    <li>
      {(props.children === `BurgerOk`) ?
        <NavLink
          className = {["navigation-element", `${!props.isSticky && !props.isGrey ? "white" : "grey"}`].join(' ')}
          to={props.link}
          exact={props.exact}
          activeClassName="active"
        >
          {props.children}
        </NavLink> : 
        <Link
          to={props.path} 
          scroll={el => {
            el.scrollIntoView({block: "start", inline: "nearest"})
            props.onMakingNavigationSticky(true)
          }}
          className={["navigation-element", `${!props.isSticky && !props.isGrey  ? "white" : "grey"}`, `${!props.signing ? "" : "active"}`, `${!props.isVisible ? "invisible" : ""}`].join(' ')}
        >
          {props.children}
        </Link>
      }
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    isVisible: state.burgerBuilder.isVisible,
    isSticky: state.burgerBuilder.isSticky
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMakingNavigationSticky: (isSticky) =>
      dispatch(actions.makingNavigationSticky(isSticky)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(navigationElement);
