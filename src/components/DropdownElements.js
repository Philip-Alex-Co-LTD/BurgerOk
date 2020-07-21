import React, { useState } from "react";
import * as authActions from "../store/actions/index";
import DropdownElement from "./DropdownElement";
import { connect } from "react-redux";

const profileDropdown = (props) => {
  const [display, setDisplay] = useState(false);

  const logoutHandler = () => {
    props.onLogout();
    setDisplay(false);
  };

  return (
    <div
      className={[
        "dropdown-elements",
        `${props.isDisplayed || display ? "displayed" : ""}`,
      ].join(" ")}
      onMouseEnter={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)}
    >
      <div>
        <ul>
          <li className="dropdown-element">Your name: {props.name}</li>
          <li className="dropdown-element">Your e-mail: {props.email}</li>
        </ul>
      </div>
      <div>
        <ul>
          <DropdownElement link="/orders">My Orders</DropdownElement>
          <DropdownElement link="/address">My Address</DropdownElement>
        </ul>
      </div>
      <div onClick={() => logoutHandler()}>
        <li className="logout-element">Logout</li>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    email: state.address.email,
    name: state.address.name
  };
};

// Function responsible for passing actions to the reducer
const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(authActions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(profileDropdown);
