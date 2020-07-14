import * as actionTypes from './actionTypes';

export const revealBackdrop = () => {
    return {
        type: actionTypes.REVEAL_BACKDROP
    };
};

export const hideBackdrop = () => {
    return {
        type: actionTypes.HIDE_BACKDROP
    };
};
