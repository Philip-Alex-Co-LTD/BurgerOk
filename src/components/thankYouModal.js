import React from "react";
import Burger from "./Burger";
import Modal from "../components/Modal";
import OrderSummary from "../components/OrderSummary";
import Spinner from "../components/Spinner";
import withErrorHandler from "../hoc/withErrorHandler/withErrorHandler";
import { connect } from "react-redux";

export default function thankYouModal() {
  return (
    <div>
      <p>
        Thanks for your order! Your delicious burger will be ready and delivered
        within 30 minutes
      </p>
      <Burger />
    </div>
  );
}

class BurgerBuilder extends Component {
  purchaseCancelHandler = () => {
    this.props.onCancelPurchasing();
  };

  signingCancelHandler = () => {
    this.props.onCancelSigning();
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
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

// Function responsible for passing state to the reducer
const mapStateToProps = (state) => {
  return {
    purchasing: state.burgerBuilder.purchasing,
    purchasingContinue: state.order.purchasing,
    signing: state.auth.signing,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
