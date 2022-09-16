import { POST_DATA, RESET_STORE } from "../actions/types";
const INSTALL_STATE = {
    posterlist: [],
};

export default (state = INSTALL_STATE, action) => {
    switch (action.type) {
        case POST_DATA:
            return { ...state, posterlist: action.payload };
        case RESET_STORE:
            return INSTALL_STATE;

        default:
            return state;
    }
};