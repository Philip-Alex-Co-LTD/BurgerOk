import React from "react";
import { FaUser } from "react-icons/fa";
import * as navigationActions from "../store/actions/index";
import { connect } from "react-redux";

const profileElement = (props) => {

    const hoverOnProfileElement = () => {
        props.onRevealBackdrop();
    };

    const hoverOffProfileElement = () => {
        props.onHideBackdrop();
    };

    return (
      <li className="navigation-element">
        <div 
          onMouseEnter={() => hoverOnProfileElement()}
          onMouseLeave={() => hoverOffProfileElement()} 
          className={["profile-element", `${!props.isGrey  ? "" : "profile-invisible"}`].join(' ')}
        >
          <FaUser
            className = {['icon-profile', `${!props.isSticky && !props.isGrey  ? "white" : "grey"}`].join(' ')}
          />
        </div>
      </li>
    );
};

const mapStateToProps = (state) => {
  return {
    isSticky: state.burgerBuilder.isSticky
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRevealBackdrop: () =>
      dispatch(navigationActions.revealBackdrop()),
    onHideBackdrop: () =>
      dispatch(navigationActions.hideBackdrop()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(profileElement);