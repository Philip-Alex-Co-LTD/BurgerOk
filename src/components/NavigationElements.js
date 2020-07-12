import React from "react";
import NavigationElement from "./NavigationElement";
import SigninElement from "./SigninElement";
import ProfileDropdown from "./ProfileDropdown";

const navigationElements = (props) => (
  <ul className="navigation-elements">
    <NavigationElement link="/" exact>
      BurgerOk
    </NavigationElement>
    {!props.isAuthenticated ? (
      <SigninElement/>
    ) : (
      <ProfileDropdown/>
    )}
  </ul>
);

export default navigationElements;
