import * as actionTypes from "../actions/actionTypes";

const initialState = {
  personalInfo: {},
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ADDRESS_DATA_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_ADDRESS_DATA_SUCCESS:
      return {
        ...state,
        personalInfo: action.personalInfo,
        loading: false,
      };
    case actionTypes.GET_ADDRESS_DATA_FAIL:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.SUBMIT_PERSONAL_INFO_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.SUBMIT_PERSONAL_INFO_SUCCESS:
      const newInfo = {
        ...action.personalInfo,
        id: action.id,
      };
      return {
        ...state,
        loading: false,
        personalInfo: newInfo,
      };
    case actionTypes.SUBMIT_PERSONAL_INFO_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
