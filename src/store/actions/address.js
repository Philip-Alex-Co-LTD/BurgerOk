import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";
// import { useImperativeHandle } from 'react';

export const getAddressDataSuccess = (personalInfo) => {
  return {
    type: actionTypes.GET_ADDRESS_DATA_SUCCESS,
    personalInfo: personalInfo,
  };
};

export const getAddressDataFail = (error) => {
  return {
    type: actionTypes.GET_ADDRESS_DATA_FAIL,
    error: error,
  };
};

export const getAddressDataStart = () => {
  return {
    type: actionTypes.GET_ADDRESS_DATA_START,
  };
};

export const getAddressData = (token, userId) => {
  return (dispatch) => {
    dispatch(getAddressDataStart());
    const queryParams =
      "?auth=" + token + '&orderBy="userId"&equalTo="' + userId + '"';
    axios
      .get("/orders.json" + queryParams)
      .then((res) => {
        const fetchedOrders = [];
        let b;
        for (let key in res.data) {
          let a = res.data[key];
          a = a["orderData"];
          fetchedOrders.push({
            ...a,
          });
          b = a;
        }
        dispatch(getAddressDataSuccess(b));
      })
      .catch((err) => {
        dispatch(getAddressDataFail(err));
      });
  };
};
