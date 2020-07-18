import React, { useState } from "react";
import * as authActions from "../store/actions/index";
import DropdownElement from "./DropdownElement";
import { connect } from "react-redux";

const profileDropdown = (props) => {
  const [display, setDisplay] = useState(false);

  const logoutHandler = () => {
    props.onLogout();
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
        <ul className>
          <li className="dropdown-element">Your name: profileName</li>
          <li className="dropdown-element">Your e-mail: email</li>
        </ul>
      </div>
      <div>
        <ul className>
          <DropdownElement link="/orders">My Orders</DropdownElement>
          <DropdownElement link="/address">My Address</DropdownElement>
        </ul>
      </div>
      <div className="no-ref-element" onClick={() => logoutHandler()}>
        <li className="logout-element">Logout</li>
      </div>
    </div>
  );
};

// Function responsible for passing actions to the reducer
const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(authActions.logout()),
  };
};

export default connect(null, mapDispatchToProps)(profileDropdown);
