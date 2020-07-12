import React, { Component } from "react";
import { connect } from "react-redux";
import Toolbar from "../components/Toolbar";
import SideDrawer from "../components/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  SideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  SideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <div>
        <Toolbar
          isAuth={this.props.isAuthenticated}
          drawerToggleClicked={this.SideDrawerToggleHandler}
        />
        <SideDrawer
          isAuth={this.props.isAuthenticated}
          open={this.state.showSideDrawer}
          closed={this.SideDrawerClosedHandler}
        />
        <main className="content">{this.props.children}</main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         onFetchedOrders: (token) => dispatch(actions.fetchOrders(token))
//     };
// }

export default connect(mapStateToProps, null)(Layout);
