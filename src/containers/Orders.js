import React, { Component } from "react";
import { connect } from "react-redux";
import { FaRegWindowClose } from "react-icons/fa";
import Order from "../components/Order";
import axios from "../axios-orders";
import withErrorHandler from "../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../store/actions/index";
import Spinner from "../components/Spinner";

class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders(this.props.token, this.props.userId);
  }

  render() {
    let startOrdering = null;
    if (!this.props.orders.length && !this.props.loading) {
      startOrdering = <h2 style = {{padding: '170px'}}>You don't have any orders yet. To start making order click "BurgerOk".</h2>
    }
    let orders = <Spinner />;
    if (!this.props.loading) {
      orders = this.props.orders.map((order) => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={order.price}
        />
      ));
    }
    return <div>
      <FaRegWindowClose className = 'icon-cancel' onClick = {() => this.props.history.push("/")}/>
      {orders}
      {startOrdering}
    </div>;
  }
}

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
)(withErrorHandler(Orders, axios));
