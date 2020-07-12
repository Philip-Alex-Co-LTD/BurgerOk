import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "../axios-orders";
import withErrorHandler from "../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../store/actions/index";
import Spinner from "../components/Spinner";
import InlineEdit from "../components/Address";

const Address = (props) => {
  const { onFetchOrders } = props;
  let orders = <Spinner />;
  let output = [],
    lastOrder,
    InputField;
  useEffect(() => {
    onFetchOrders(props.token, props.userId);
  }, []);

  const handleChange = (event, id) => {
    InputField[id] = event;
  };

  if (!props.loading) {
    // console.log(props.orders);
    lastOrder =
      props.orders[
        Object.keys(props.orders)[Object.keys(props.orders).length - 1]
      ];
    if (lastOrder) {
      const inputTitle = Object.keys(lastOrder["orderData"]);
      InputField = Object.values(lastOrder["orderData"]);

      //   setStoredText(InputField);
      console.log(inputTitle, InputField);
      for (let i in inputTitle) {
        output.push(
          <div className="address" key={i + "z745"}>
            <p className="span-1-of-3">{inputTitle[i]}</p>
            <InlineEdit
              text={InputField[i]}
              onSetText={(event) => handleChange(event, i)}
            />
          </div>
        );
      }
    }
  }
  return <div className="address-section">{output ? output : orders}</div>;
};

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: (token, userId) =>
      dispatch(actions.fetchOrders(token, userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Address, axios));
