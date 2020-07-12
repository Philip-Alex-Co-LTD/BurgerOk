import React from "react";
import { NavLink } from "react-router-dom";
import * as signingActions from "../store/actions/index";
import { connect } from "react-redux";

const navigationItem = (props) => {
  const continueSigningHandler = () => {
    props.onContinueSigning();
  };

  const logoutHandler = () => {
    props.onLogout();
  };

  return (
    <li className="navigation-item">
      {props.children === `Orders` ||
      props.children === `BurgerOk` ||
      props.children === `Address` ? (
        <NavLink to={props.link} exact={props.exact} activeClassName="active">
          {props.children}
        </NavLink>
      ) : (
        <div
          className={[
            "navigation-item",
            "no-ref-element",
            `${!props.signing ? "" : "active"}`,
          ].join(" ")}
          onClick={
            props.children === `Sign in`
              ? () => continueSigningHandler()
              : () => logoutHandler()
          }
        >
          {props.children}
        </div>
      )}
    </li>
  );
};

// Function responsible for passing state to the reducer
const mapStateToProps = (state) => {
  return {
    signing: state.auth.signing,
  };
};

// Function responsible for passing actions to the reducer
const mapDispatchToProps = (dispatch) => {
  return {
    onCancelSigning: () => dispatch(signingActions.cancelSigning()),
    onContinueSigning: () => dispatch(signingActions.continueSigning()),
    onLogout: () => dispatch(signingActions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(navigationItem);
