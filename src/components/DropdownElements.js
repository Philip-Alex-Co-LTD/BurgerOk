<<<<<<< Updated upstream
import React, {useState} from "react";
=======
import React, { useState } from "react";
>>>>>>> Stashed changes
import * as authActions from "../store/actions/index";
import DropdownElement from "./DropdownElement";
import { connect } from "react-redux";

const profileDropdown = (props) => {
<<<<<<< Updated upstream
  
  const [display, setDisplay] = useState(false);
  
=======
  const [display, setDisplay] = useState(false);

>>>>>>> Stashed changes
  const logoutHandler = () => {
    props.onLogout();
  };

  return (
<<<<<<< Updated upstream
    <div 
      className = {["dropdown-elements", `${props.isDisplayed || display ? "displayed" : ""}`].join(' ')}
      onMouseEnter={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)} 
    >
      <div>
        <ul className>
          <li className = "dropdown-element">Your name: profileName</li>
          <li className = "dropdown-element">Your e-mail: email</li>
=======
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
>>>>>>> Stashed changes
        </ul>
      </div>
      <div>
        <ul className>
          <DropdownElement link="/orders">My Orders</DropdownElement>
<<<<<<< Updated upstream
          <DropdownElement link="/orders">My Address</DropdownElement>
        </ul>
      </div>
      <div 
        className = "no-ref-element"
        onClick={() => logoutHandler()}
      >
        <li className = "logout-element">
            Logout
        </li>
      </div>
    </div>   
=======
          <DropdownElement link="/address">My Address</DropdownElement>
        </ul>
      </div>
      <div className="no-ref-element" onClick={() => logoutHandler()}>
        <li className="logout-element">Logout</li>
      </div>
    </div>
>>>>>>> Stashed changes
  );
};

// Function responsible for passing actions to the reducer
const mapDispatchToProps = (dispatch) => {
  return {
<<<<<<< Updated upstream
    onLogout: () =>
      dispatch(authActions.logout()),
  };
};

export default connect(null, mapDispatchToProps)(profileDropdown);
=======
    onLogout: () => dispatch(authActions.logout()),
  };
};

export default connect(null, mapDispatchToProps)(profileDropdown);
>>>>>>> Stashed changes
