import React from "react";
import * as signingActions from "../store/actions/index";
import NavigationItem from "./NavigationItem";
import { connect } from "react-redux";

const profileDropdown = (props) => {

  const logoutHandler = () => {
    props.onLogout();
  };

  return (
    <ul className={["dropdown-content", `${props.isDisplayed ? "displayed" : ""}`].join(' ')}>
        <li>
          <NavigationItem link="/orders">My Orders</NavigationItem>
        </li>
        <li className = "navigation-item">
          <div 
            className = "no-ref-element"
            onClick={() => logoutHandler()}
          >
            Logout
          </div>
        </li>
    </ul>
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