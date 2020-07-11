import React from "react";
import NavigationItem from "./NavigationItem";
import NavigationItem from "./ProfileDropdown";

const navigationItems = (props) => (
  <ul className="navigation-items">
    <NavigationItem link="/" exact>
      BurgerOk
    </NavigationItem>
    {props.isAuthenticated ? (
      <NavigationItem link="/orders">Orders</NavigationItem>
    ) : null}
    {!props.isAuthenticated ? (
      <NavigationItem>Sign in</NavigationItem>
    ) : (
      <ProfileDropdown>Logout</ProfileDropdown>
    )}
  </ul>
);

export default navigationItems;
