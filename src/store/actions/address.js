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
      .get("/Address.json" + queryParams)
      .then((res) => {
        let a = res.data[Object.keys(res.data).sort().reverse()[0]].Data;
        dispatch(getAddressDataSuccess(a));
      })
      .catch((err) => {
        dispatch(getAddressDataFail(err));
      });
  };
};

export const submitPersonalInfoSuccess = () => {
  return {
    type: actionTypes.SUBMIT_PERSONAL_INFO_SUCCESS,
  };
};

export const submitPersonalInfoFail = (error) => {
  return {
    type: actionTypes.SUBMIT_PERSONAL_INFO_FAIL,
    error: error,
  };
};

export const submitPersonalInfoStart = () => {
  return {
    type: actionTypes.SUBMIT_PERSONAL_INFO_START,
  };
};

export const submitPersonalInfo = (personalInfo, token) => {
  return (dispatch) => {
    dispatch(submitPersonalInfoStart());
    axios
      .post("/Address.json?auth=" + token, personalInfo)
      .then((response) => {
        dispatch(storeNameAndEmail(personalInfo));
        dispatch(submitPersonalInfoSuccess());
      })
      .catch((error) => {
        dispatch(submitPersonalInfoFail(error));
      });
  };
};

export const storeNameAndEmail = (personalInfo) => {
  return {
    type: actionTypes.STORE_NAME_AND_EMAIL,
    email: Object.values(personalInfo[3]),
    name: Object.values(personalInfo[4]),
  };
};
