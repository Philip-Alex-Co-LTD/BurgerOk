import React from "react";
import Logo from "./Logo";
import DropdownElements from "./DropdownElements";
import NavigationElements from "./NavigationElements";
import DrawerToggle from "./DrawerToggle";
import { connect } from "react-redux";

const toolbar = (props) => (
  <header className="toolbar">
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <nav className="desktop-only">
      <NavigationElements isAuthenticated={props.isAuth} />
    </nav>
    <DropdownElements isDisplayed={props.showingBackdrop} />
  </header>
);

// Function responsible for passing state to the reducer
const mapStateToProps = (state) => {
  return {
    showingBackdrop: state.navigation.showingBackdrop,
  };
};

export default connect(mapStateToProps)(toolbar);
