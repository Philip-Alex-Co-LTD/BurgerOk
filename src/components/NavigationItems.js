import React from "react";
import NavigationItem from "./NavigationItem";
import ProfileDropdown from "./ProfileDropdown";

const navigationItems = (props) => (
  <ul className="navigation-items">
    <NavigationItem link="/" exact>
      BurgerOk
    </NavigationItem>
    {!props.isAuthenticated ? (
      <NavigationItem>Sign in</NavigationItem>
    ) : (
      <ProfileDropdown/>
    )}
  </ul>
);

export default navigationItems;
