// import * as actionTypes from "../actions/actionTypes";

// const initialState = {
//   Country: "",
//   City: "",
//   "First Name": "",
//   "Last Name": "",
//   "E-mail": "",
//   Street: "",
//   "Zip code": false,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.GET_ADDRESS_DATA_START:
//       return {
//         ...state,
//         loading: true,
//       };
//     case actionTypes.GET_ADDRESS_DATA_SUCCESS:
//       return {
//         ...state,
//         orders: action.orders,
//         loading: false,
//       };
//     case actionTypes.GET_ADDRESS_DATA_FAIL:
//       return {
//         ...state,
//         loading: false,
//       };
//     case actionTypes.ADD_INGREDIENTS:
//       return {
//         ...state,
//         ingredients: {
//           ...state.ingredients,
//           [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
//         },
//         totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
//         building: true,
//       };
//     default:
//       return state;
//   }
// };

// export default reducer;
