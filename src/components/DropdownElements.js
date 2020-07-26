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

  let name, email;

  if (!props.name) {
    name = `---`;
  } else if (props.name.length >= 7) {
    name = `${props.name.substr(0, 7)}...`;
  } else {
    name = props.name
  }

  if (!props.email) {
    email = `---`;
  } else if (props.email.length >= 7) {
    email = `${props.email.substr(0, 7)}...`;
  } else {
    email = props.email
  }

  return (
    <div
      className={[
        "dropdown-elements",
        `${props.isDisplayed || display ? "displayed" : ""}`,
        `${!props.isSticky ? "not-sticky" : ""}`
      ].join(" ")}
      onMouseEnter={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)}
    >
      <div>
        <ul>
          <li className={["dropdown-element", `${!props.isSticky ? "white" : "grey"}`].join(' ')}>Your name: {name}</li>
          <li className={["dropdown-element", `${!props.isSticky ? "white" : "grey"}`].join(' ')}>Your e-mail: {email}</li>
        </ul>
      </div>
      <div>
        <ul>
          <DropdownElement link="/orders">My Orders</DropdownElement>
          <DropdownElement link="/address">My Address</DropdownElement>
        </ul>
      </div>
      <div onClick={() => logoutHandler()}>
        <li className={["logout-element", `${!props.isSticky ? "white" : "grey"}`].join(' ')}>Logout</li>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    email: state.address.email,
    name: state.address.name,
    isSticky: state.burgerBuilder.isSticky
  };
};

// Function responsible for passing actions to the reducer
const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(authActions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(profileDropdown);
