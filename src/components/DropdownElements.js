import React, {useState} from "react";
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
        onMouseEnter={() => setDisplay(true)}
        onMouseLeave={() => setDisplay(false)} 
    >
      <ul className = "profile-credentials">
        <li className = "dropdown-element">Your name: profileName</li>
        <li className = "dropdown-element">Your e-mail: email</li>
        
      </ul>
      <ul className={["dropdown-elements", `${props.isDisplayed || display ? "displayed" : ""}`].join(' ')}>
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
    </div>
  );
};

// Function responsible for passing actions to the reducer
const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () =>
      dispatch(authActions.logout()),
  };
};

export default connect(null, mapDispatchToProps)(profileDropdown);