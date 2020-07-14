import * as actionTypes from '../actions/actionTypes';

const initialState = {
    showingBackdrop: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REVEAL_BACKDROP:
            return {
                ...state,
                showingBackdrop: true 
            };
        case actionTypes.HIDE_BACKDROP:
            return {
                ...state,
                showingBackdrop: false 
            };
        default:
            return state;
    }
}

export default reducer;