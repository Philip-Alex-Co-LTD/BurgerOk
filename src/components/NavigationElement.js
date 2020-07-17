import React from "react";
import { NavLink } from "react-router-dom";
import * as signingActions from "../store/actions/index";
import { connect } from "react-redux";

const navigationElement = (props) => {

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);   

  const executeScroll = () => {
    props.references.forEach(el => {
      if (el[0] === props.scrollToSection) {
        scrollToRef(el[1]);
      };
    })
  };

  return (
    <li className="navigation-element">
      {(props.children === `BurgerOk`) ?
        <NavLink
          to={props.link}
          exact={props.exact}
          activeClassName="active"
        >
          {props.children}
        </NavLink> : 
        <div 
          className={[`${!props.signing ? "" : "active"}`].join(' ')}
          onClick={() => executeScroll()}
        >
          {props.children}
        </div>
      }
    </li>
  );
};

// Function responsible for passing state to the reducer
const mapStateToProps = (state) => {
  return {
    references: state.navigation.references,
  };
};

// Function responsible for passing actions to the reducer
const mapDispatchToProps = (dispatch) => {
  return {
    onCancelSigning: () =>
      dispatch(signingActions.cancelSigning()),
    onContinueSigning: () =>
      dispatch(signingActions.continueSigning()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(navigationElement);
