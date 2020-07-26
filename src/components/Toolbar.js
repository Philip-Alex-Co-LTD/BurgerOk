import React from "react";
import DropdownElements from "./DropdownElements";
import NavigationElements from "./NavigationElements";
import DrawerToggle from "./DrawerToggle";
import { connect } from "react-redux";

const toolbar = (props) => (
  <React.Fragment>
    <nav className={["toolbar", "desktop-only", `${props.isSticky ? 'sticky' : ''}`].join(' ')}>
          <NavigationElements isAuthenticated={props.isAuth}/>
      <DropdownElements isDisplayed = {props.showingBackdrop}/>
    </nav>
      <DrawerToggle clicked={props.drawerToggleClicked}/>
    </React.Fragment>
);

// Function responsible for passing state to the reducer
const mapStateToProps = (state) => {
  return {
    showingBackdrop: state.navigation.showingBackdrop,
    isSticky: state.burgerBuilder.isSticky
  };
};

export default connect(mapStateToProps)(toolbar);
