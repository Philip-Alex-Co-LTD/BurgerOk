import React from "react";
import * as signingActions from "../store/actions/index";
import { connect } from "react-redux";

const signinElement = (props) => {
  
  const continueSigningHandler = () => {
    props.onContinueSigning();
  };

  return (
    <div onClick={() => continueSigningHandler()}>Sign in</div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onContinueSigning: () =>
      dispatch(signingActions.continueSigning()),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(signinElement);