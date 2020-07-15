import React from "react";
import Button from "./Button";
import { node } from "prop-types";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize", padding: "15px" }}>
          {igKey}
        </span>
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <div
      style={{
        backgroundColor: "#f8f8f8",
        textAlign: "center",
        height: "100%",
      }}
    >
      <h2>Your order</h2>
      <div
        style={{
          backgroundColor: "#fcfcfc",
          border: "1px solid #ccc",
          width: "fit-content",
          margin: "0 auto 5% auto",
        }}
      >
        <p
          style={{
            textAlign: "center",
            padding: "10px",
          }}
        >
          A delicious burger with the following ingredients:
        </p>
        <ul
          style={{
            listStyle: "none",
            textAlign: "revert",
          }}
        >
          {ingredientSummary}
        </ul>
        <h3
          style={{
            marginBottom: "0px",
            marginTop: "10px",
            margin: "0px 20px 0px 20px",
            display: "inline-block",
          }}
        >
          Total Price:
        </h3>
        <p className="plan-price" style={{ marginTop: "10px" }}>
          {" "}
          {props.price.toFixed(2)}$
        </p>
      </div>
      <p>Continue to Checkout?</p>
      <Button btnType="danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </div>
  );
};

export default orderSummary;
