import React, { Component } from "react";
import Header from "../containers/header";
import Cities from "../components/Cities";
import HowItWorks from "../components/HowItWorks";
import ContactUs from "../components/ContactUs";
import Burger from "../components/Burger";
import Features from "../components/Features";
import Auth from "./Auth";
import BuildControls from "../components/BuildControls";
import Modal from "../components/Modal";
import OrderSummary from "../components/OrderSummary";
import Spinner from "../components/Spinner";
import withErrorHandler from "../hoc/withErrorHandler/withErrorHandler";
import * as burgerBuiderActions from "../store/actions/index";
import { connect } from "react-redux";
import axios from "../axios-orders";
import Footer from "./Footer";

class BurgerBuilder extends Component {

  state = {
    showSideDrawer: false,
  };

  componentDidMount() {
    // Fetching data from the Database
    this.props.onInitIngredients();
    let isNavigationVisible = true;
    this.props.onMakingNavigationVisible(isNavigationVisible);
  }
  
  componentWillUnmount() {
    let isNavigationVisible = false;
    this.props.onMakingNavigationVisible(isNavigationVisible);
  }

  SideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  SideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };


  updatedPurchaseState(ingredients) {
    // Construct an array from "ingredients" object keys and reduce array's total sum to a single value.
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    //  Updates a state with a boolean value with sum exceeding 0.
    return sum > 0;
  }

  purchaseHandler = () => {
    if (this.props.isAuthenticated) {
      this.props.onContinuePurchasing();
    } else {
      this.props.onSetAuthRedirectPath("/checkout");
      this.props.onContinueSigning();
    }
  };

  purchaseCancelHandler = () => {
    this.props.onCancelPurchasing();
  };

  signingCancelHandler = () => {
    this.props.onCancelSigning();
  };

  purchaseContinueHandler = () => {
    this.props.onInitPurchase();

    this.props.history.push("/contact-data");
  };

  render() {
    const disabledInfo = {
      ...this.props.ings,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;
    let burger = this.props.error ? (
      <p>Ingredients can't be loaded!</p>
    ) : (
      <Spinner />
    );

    if (this.props.ings) {
      burger = (
        <React.Fragment>
          <section className="burger-section-h2">
            <div className="row">
              <h2> Start making your own burger</h2>
            </div>
            <div className="burger-section">
              <Burger ingredients={this.props.ings} />
              <BuildControls
                ingredientAdded={this.props.onIngredientAdded}
                ingredientRemoved={this.props.onIngredientRemoved}
                disabled={disabledInfo}
                purchasable={this.updatedPurchaseState(this.props.ings)}
                ordered={this.purchaseHandler}
                isAuth={this.props.isAuthenticated}
                price={this.props.price}
              />
            </div>
          </section>
        </React.Fragment>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ings}
          price={this.props.price}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
        />
      );
    }

    return (
      <React.Fragment>
        {/* <main className="content"> */}
          <Header 
            isAuth={this.props.isAuthenticated}
            drawerToggleClicked={this.SideDrawerToggleHandler}
            open={this.state.showSideDrawer}
            closed={this.SideDrawerClosedHandler}
          />
          <Modal
            show={this.props.purchasing && this.props.purchasingContinue}
            modalClosed={this.purchaseCancelHandler}
          >
            {orderSummary}
          </Modal>
          <Modal
            show={this.props.signing}
            modalClosed={this.signingCancelHandler}
          >
            <Auth />
          </Modal>
          <Features />
          <HowItWorks />
          {burger}
          <Cities />
          <ContactUs />
          <Footer />
        {/* </main> */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
    isAuthenticated: state.auth.token !== null,
    purchasing: state.burgerBuilder.purchasing,
    purchasingContinue: state.order.purchasing,
    signing: state.auth.signing,
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingName) =>
      dispatch(burgerBuiderActions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) =>
      dispatch(burgerBuiderActions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(burgerBuiderActions.initIngredients()),
    onInitPurchase: () => dispatch(burgerBuiderActions.purchaseInit()),
    onSetAuthRedirectPath: (path) =>
      dispatch(burgerBuiderActions.setAuthRedirectPath(path)),
    onCancelPurchasing: () => dispatch(burgerBuiderActions.cancelPurchasing()),
    onContinuePurchasing: () =>
      dispatch(burgerBuiderActions.continuePurchasing()),
    onContinueSigning: () => dispatch(burgerBuiderActions.continueSigning()),
    onCancelSigning: () => dispatch(burgerBuiderActions.cancelSigning()),
    onMakingNavigationVisible: (isNavigationVisible) => dispatch(burgerBuiderActions.makingNavigationVisible(isNavigationVisible)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
