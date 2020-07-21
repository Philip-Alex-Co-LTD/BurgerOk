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

  if (!props.personalInfo[`First Name`]) {
    name = `---`;
  } else if (props.personalInfo[`First Name`].length >= 7) {
    name = `${props.personalInfo[`First Name`].substr(0, 7)}...`;
  } else {
    name = props.personalInfo[`First Name`]
  }

  if (!props.personalInfo[`E-mail`]) {
    email = `---`;
  } else if (props.personalInfo[`E-mail`].length >= 7) {
    email = `${props.personalInfo[`E-mail`].substr(0, 7)}...`;
  } else {
    email = props.personalInfo[`E-mail`]
  }

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
          <li className="dropdown-element">Your name: {name}</li>
          <li className="dropdown-element">Your e-mail: {email}</li>
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
    personalInfo: state.address.personalInfo
  };
};

// Function responsible for passing actions to the reducer
const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(authActions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(profileDropdown);
