import { USER_DATA, RESET_STORE } from "../actions/types";
const INSTALL_STATE = {
  userData: {},
};

export default (state = INSTALL_STATE, action) => {
  switch (action.type) {
    case USER_DATA:
      return { ...state, userData: action.payload };
    case RESET_STORE:
      return INSTALL_STATE;

    default:
      return state;
  }
};
