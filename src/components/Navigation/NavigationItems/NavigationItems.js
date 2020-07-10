import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className="navigation-items">
    <NavigationItem link="/" exact>
      Burger Builder
    </NavigationItem>
    {props.isAuthenticated ? (
      <NavigationItem link="/orders">Orders</NavigationItem>
    ) : null}
    {!props.isAuthenticated ? (
      <NavigationItem>Sign in</NavigationItem>
    ) : (
      <NavigationItem>Logout</NavigationItem>
    )}
  </ul>
);

export default navigationItems;
