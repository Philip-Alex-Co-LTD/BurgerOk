import React from "react";
import NavigationElement from "./NavigationElement";
import SigninElement from "./SigninElement";
import ProfileElement from "./ProfileElement";
import { connect } from "react-redux";
const navigationElements = (props) => (

  <ul className="navigation-elements">
    <NavigationElement path = "/path#contact-us" isGrey = {props.isToggle}>
      Contact us
    </NavigationElement>
    <NavigationElement path = "/path#cities" isGrey = {props.isToggle}>
      Our cities
    </NavigationElement>
    <NavigationElement path = "/path#works" isGrey = {props.isToggle}>
      How it works
    </NavigationElement>
    <NavigationElement path = "/path#features" isGrey = {props.isToggle}>
      Food delivery
    </NavigationElement>
    <NavigationElement link="/" exact isGrey = {props.isToggle}>
      BurgerOk
    </NavigationElement>
    {props.isToggle && (<NavigationElement path = "/address" isGrey = {props.isToggle}>
        MY ADDRESS
      </NavigationElement>)}
    {props.isToggle && (<NavigationElement path = "/orders" isGrey = {props.isToggle}>
        ORDERS
      </NavigationElement>)}

      {!props.isAuthenticated ? (
          <SigninElement isGrey = {props.isToggle}/>
        ) : (
          <ProfileElement isGrey = {props.isToggle}/>
        )
      }
  </ul>
);

const mapStateToProps = (state) => {
  return {
    isVisible: state.burgerBuilder.isVisible
  };
};

export default connect(
  mapStateToProps,
)(navigationElements);
