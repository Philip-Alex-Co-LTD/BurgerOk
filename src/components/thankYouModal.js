import React from "react";
import Burger from "./Burger";
import Modal from "../components/Modal";

import { connect } from "react-redux";

const thankYouModal = (props) => {
  //   return (
  //     // <Modal show={true} modalClosed={false}>
  //     //   <p>
  //     //     Thanks for your order! Your delicious burger will be ready and delivered
  //     //     within 30 minutes
  //     //   </p>
  //     //   <Burger
  //     //     ingredients={props.ings}
  //     //     style={{ width: "100px", height: "100px" }}
  //     //   />
  //     // </Modal>
  //   );
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
