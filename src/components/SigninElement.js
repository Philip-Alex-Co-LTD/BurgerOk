import React from "react";
import * as signingActions from "../store/actions/index";
import { connect } from "react-redux";

const signinElement = () => {
  
  const continueSigningHandler = () => {
    props.onContinueSigning();
  };

  return (
    <div onClick={() => continueSigningHandler()}>Sign in</div>
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
    onContinueSigning: () =>
      dispatch(signingActions.continueSigning()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(signinElement);