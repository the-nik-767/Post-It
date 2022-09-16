import { POSTER_DATA, RESET_STORE } from "../actions/types";
const INSTALL_STATE = {
    posterData: false,
};

export default (state = INSTALL_STATE, action) => {
    switch (action.type) {
        case POSTER_DATA:
            return { ...state, posterData: action.payload };
        case RESET_STORE:
            return INSTALL_STATE;
        default:
            return state;
    }
};
