import React from "react";
import NavigationElement from "./NavigationElement";
import SigninElement from "./SigninElement";
import ProfileElement from "./ProfileElement";

const navigationElements = (props) => (

  <ul className="navigation-elements">
    <NavigationElement link="/" exact>
      BurgerOk
    </NavigationElement>
    <li className="navigation-element">
      {!props.isAuthenticated ? (
          <SigninElement/>
        ) : (
          <ProfileElement/>
        )
      }
    </li>
  </ul>
);

export default navigationElements;
