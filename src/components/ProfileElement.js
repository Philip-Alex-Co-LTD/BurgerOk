import React, { useState } from "react";
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
        <div 
            onMouseEnter={() => hoverOnProfileElement()}
            onMouseLeave={() => hoverOffProfileElement()} 
            className="profile-element"
        >
            <FaUser className = 'icon-profile'/>
        </div>
    );
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
  null,
  mapDispatchToProps
)(profileElement);