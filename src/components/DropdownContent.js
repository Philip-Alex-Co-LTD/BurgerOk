import React from "react";
import { NavLink } from "react-router-dom";
import * as signingActions from "../store/actions/index";
import { connect } from "react-redux";

const profileDropdown = (props) => {

  return (
    <div className="dropdown-content">
        <NavigationItem link="/orders">Orders</NavigationItem>
        <div>Logout</div>
    </div>
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
    onLogout: () =>
      dispatch(signingActions.logout()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(profileDropdown);