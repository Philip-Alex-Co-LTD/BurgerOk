import React from "react";
import NavigationElement from "./NavigationElement";
import SigninElement from "./SigninElement";
import ProfileElement from "./ProfileElement";

const navigationElements = (props) => (

  <ul className="navigation-elements">
    <NavigationElement scrollTo = "section-contact">
      Contact us
    </NavigationElement>
    <NavigationElement scrollTo = "section-cities">
      Our cities
    </NavigationElement>
    <NavigationElement scrollTo = "section-steps">
      How it works
    </NavigationElement>
    <NavigationElement scrollTo = "section-features">
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
