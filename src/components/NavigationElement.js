import React from "react";
import { NavLink } from "react-router-dom";
import * as signingActions from "../store/actions/index";
import { connect } from "react-redux";

const navigationElement = (props) => {
  
  const continueSigningHandler = () => {
    props.onContinueSigning();
  };

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
          className={["no-ref-element", `${!props.signing ? "" : "active"}`].join(' ')}
          onClick={() => continueSigningHandler()}
        >
          {props.children}
        </div>
      }
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
    onCancelSigning: () =>
      dispatch(signingActions.cancelSigning()),
    onContinueSigning: () =>
      dispatch(signingActions.continueSigning()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(navigationElement);