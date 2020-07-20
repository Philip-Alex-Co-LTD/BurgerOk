import React from "react";
import NavigationElement from "./NavigationElement";
import SigninElement from "./SigninElement";
import ProfileElement from "./ProfileElement";

const navigationElements = (props) => (

  <ul className="navigation-elements">
    <NavigationElement path = "/path#contact-us">
      Contact us
    </NavigationElement>
    <NavigationElement path = "/path#cities">
      Our cities
    </NavigationElement>
    <NavigationElement path = "/path#works">
      How it works
    </NavigationElement>
    <NavigationElement path = "/path#features">
      Food delivery
    </NavigationElement>
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
