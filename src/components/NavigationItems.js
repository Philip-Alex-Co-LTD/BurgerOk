import React from "react";
import NavigationItem from "./NavigationItem";

const navigationItems = (props) => (
  <ul className="navigation-items">
    <NavigationItem link="/" exact>
      BurgerOk
    </NavigationItem>
    {props.isAuthenticated && (
      <NavigationItem link="/orders">Orders</NavigationItem>
    )}
    {props.isAuthenticated && (
      <NavigationItem link="/address">Address</NavigationItem>
    )}
    {!props.isAuthenticated ? (
      <NavigationItem>Sign in</NavigationItem>
    ) : (
      <NavigationItem>Logout</NavigationItem>
    )}
  </ul>
);

export default navigationItems;
