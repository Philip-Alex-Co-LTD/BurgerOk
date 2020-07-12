import React from "react";
import * as signingActions from "../store/actions/index";
import NavigationItem from "./NavigationItem";
import { connect } from "react-redux";

const profileDropdown = (props) => {

  const logoutHandler = () => {
    props.onLogout();
  };

  return (
    <div className={["dropdown-content", `${props.isDisplayed ? "displayed" : ""}`].join(' ')}>
        <NavigationItem link="/orders">My Orders</NavigationItem>
        <div 
          onClick={() => logoutHandler()}
        >
          Logout
        </div>
    </div>
  );
};

// Function responsible for passing state to the reducer
const mapStateToProps = () => {};

// Function responsible for passing actions to the reducer
const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () =>
      dispatch(signingActions.logout()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(profileDropdown);