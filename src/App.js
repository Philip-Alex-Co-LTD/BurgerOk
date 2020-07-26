import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import Layout from "./containers/Layout";
import BurgerBuilder from "./containers/BurgerBuilder";
import Checkout from "./containers/Checkout";
import Orders from "./containers/Orders";
import Logout from "./containers/Logout";
import Address from "./containers/Address";
import * as actions from "./store/actions/index";
import ContactData from "./containers/ContactData";

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  componentWillUpdate() {
    console.log(this.props.location.pathname)
    if (this.props.location.pathname !== '/') {
      this.props.onMakingNavigationSticky(true) 
    }else {
      this.props.onMakingNavigationSticky(false) 
    }
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/contact-data" component={ContactData} />
          <Route path="/orders" component={Orders} />
          <Route path="/address" component={Address} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <React.Fragment>
        {/* <Layout> */}
          {routes}
        {/* </Layout> */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
    onMakingNavigationSticky: (isSticky) =>
      dispatch(actions.makingNavigationSticky(isSticky)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
