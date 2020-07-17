import React from "react";
import NavigationElement from "./NavigationElement";
import SigninElement from "./SigninElement";
import ProfileElement from "./ProfileElement";

const navigationElements = (props) => (

  <ul className="navigation-elements">
    <NavigationElement scrollToSection = "section-contact">
      Contact us
    </NavigationElement>
    <NavigationElement scrollToSection = "section-cities">
      Our cities
    </NavigationElement>
    <NavigationElement scrollToSection = "section-steps">
      How it works
    </NavigationElement>
    <NavigationElement scrollToSection = "section-features">
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
