import React from "react";
import * as signingActions from "../store/actions/index";
import DropdownElement from "./DropdownElement";
import { connect } from "react-redux";

const profileDropdown = (props) => {

  const logoutHandler = () => {
    props.onLogout();
  };

  return (
    <ul className={["dropdown-elements", `${props.isDisplayed ? "displayed" : ""}`].join(' ')}>
      <DropdownElement link="/orders">My Orders</DropdownElement>
      <DropdownElement link="/orders">My Address</DropdownElement>
      <li className = "dropdown-element">
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

// Function responsible for passing actions to the reducer
const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () =>
      dispatch(signingActions.logout()),
  };
};

export default connect(null, mapDispatchToProps)(profileDropdown);