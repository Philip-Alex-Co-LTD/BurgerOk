import React from "react";
import * as signingActions from "../store/actions/index";
import { connect } from "react-redux";

const signinElement = (props) => {
  
  const continueSigningHandler = () => {
    props.onContinueSigning();
  };

  return (
    <li 
      className = {["signin-element", `${!props.isSticky && !props.isGrey  ? "white" : "grey"}`].join(' ')}
      onClick={() => continueSigningHandler()}
    >
      {/* <div 
        onClick={() => continueSigningHandler()}
        className = "signin-element"
      > */}
        Sign in
      {/* </div> */}
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    isSticky: state.burgerBuilder.isSticky
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onContinueSigning: () =>
      dispatch(signingActions.continueSigning()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(signinElement);