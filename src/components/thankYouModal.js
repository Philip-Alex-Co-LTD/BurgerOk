import React from "react";
import Burger from "./Burger";
import Modal from "../components/Modal";
import { connect } from "react-redux";

const thankYouModal = (props) => {
  return (
    <div className="thankYou-modal">
      <Modal show={props.show} modalClosed={props.closed}>
        <h2 style={{ marginTop: "1%", marginBottom: "3%" }}>Thank you!</h2>
        <p style={{ marginBottom: "2%" }}>
          Your delicious burger will be ready and delivered within 30 minutes
        </p>

        <Burger
          ingredients={props.ings}
          style={{
            width: "260px",
            height: "230px",
            boxShadow: "0px 0px 0px #ffffff",
            marginBottom: "0px",
          }}
        />
        <h3 style={{ marginBottom: "10px" }}>Enjoy!</h3>
        <button
          className="order-button"
          onClick={props.closed}
          style={{ marginBottom: "10px" }}
        >
          BACK TO MAIN PAGE
        </button>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    purchasing: state.burgerBuilder.purchasing,
    purchasingContinue: state.order.purchasing,
    signing: state.auth.signing,
    ings: state.burgerBuilder.ingredients,
  };
};

export default connect(mapStateToProps)(thankYouModal);
