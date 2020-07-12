import React, { Component } from "react";
import Cities from "../Cities/Cities";
import HowItWorks from "../HowItWorks/HowItWorks";
import ContactUs from "../ContactUs/ContactUs";
import Burger from "../../components/Burger/Burger";
import Features from "../Features/Features";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as burgerBuiderActions from "../../store/actions/index";
import { connect } from "react-redux";
import axios from "../../axios-orders";
import Footer from "../Footer";

class BurgerBuilder extends Component {
  // constructor (props) {
  //     super (props);
  //     this.state = {...}
  // }
  state = {
    purchasing: false,
  };

  componentDidMount() {
    // Fetching data from the Database
    this.props.onInitIngredients();
  }

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
      this.setState({ purchasing: true });
    } else {
      this.props.onSetAuthRedirectPath("/checkout");
      this.props.history.push("/auth");
    }
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.props.onInitPurchase();
    this.props.history.push("/checkout");
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
          <div className="burger-section-h2">
            <h2> Start making your own burger</h2>
          </div>
          <div className="burger-section">
            <BuildControls
              ingredientAdded={this.props.onIngredientAdded}
              ingredientRemoved={this.props.onIngredientRemoved}
              disabled={disabledInfo}
              purchasable={this.updatedPurchaseState(this.props.ings)}
              ordered={this.purchaseHandler}
              isAuth={this.props.isAuthenticated}
              price={this.props.price}
            />
            <Burger ingredients={this.props.ings} />
          </div>
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

    // {salad: true, meat: false, ...}
    return (
      <div>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        <Features />
        <HowItWorks />
        {burger}
        <Cities />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

// Function responsible for passing state to the reducer
const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
    isAuthenticated: state.auth.token !== null,
  };
};

// Function responsible for passing actions to the reducer
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
