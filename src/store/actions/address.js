// import * as actionTypes from "./actionTypes";
// import axios from "../../axios-orders";
// // import { useImperativeHandle } from 'react';

// export const getAddressDataSuccess = (orders) => {
//   return {
//     type: actionTypes.GET_ADDRESS_DATA_SUCCESS,
//     orders: orders,
//   };
// };

// export const getAddressDataFail = (error) => {
//   return {
//     type: actionTypes.GET_ADDRESS_DATA_FAIL,
//     error: error,
//   };
// };
// export const changeAddress = (name) => {
//   return {
//     type: actionTypes.ADD_INGREDIENTS,
//     ingredientName: name,
//   };
// };

// export const getAddressDataStart = () => {
//   return {
//     type: actionTypes.GET_ADDRESS_DATA_START,
//   };
// };

// export const getAddressData = (token, userId) => {
//   return (dispatch) => {
//     dispatch(getAddressDataStart());
//     const queryParams =
//       "?auth=" + token + '&orderBy="userId"&equalTo="' + userId + '"';
//     axios
//       .get("/orders.json" + queryParams)
//       .then((res) => {
//         const fetchedOrders = [];
//         for (let key in res.data) {
//           fetchedOrders.push({
//             ...res.data[key],
//             id: key,
//           });
//         }
//         dispatch(getAddressDataSuccess(fetchedOrders));
//       })
//       .catch((err) => {
//         dispatch(getAddressDataFail(err));
//       });
//   };
// };
