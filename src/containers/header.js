import * as actions from "../store/actions/index";import React from "react";
import Toolbar from "../components/Toolbar";
import SideDrawer from "../components/SideDrawer";
import { connect } from "react-redux";

const header = (props) => {

  return (
    <header>
      <Toolbar
        isAuth={props.isAuth}
        drawerToggleClicked={props.drawerToggleClicked}
      />
      <SideDrawer
        isAuth={props.isAuth}
        open={props.open}
        closed={props.closed}
      />
      <div className="hero-text-box">
        <h1>
          Goodbye regular burgers.
          <br /> Become burger designer on your own
        </h1>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMakingNavigationNotSticky: (isSticky) =>
      dispatch(actions.makingNavigationSticky(isSticky)),
  };
};

export default connect ( mapStateToProps, mapDispatchToProps )(header);