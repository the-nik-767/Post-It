import { combineReducers } from "redux";
import posterDataReducer from "./posterDataReducer";
import posterReducer from "./posterReducer";
import userReducer from "./userReducer";

const appReducer = combineReducers({
    poster: posterReducer,
    user: userReducer,
    postlist: posterDataReducer
});

export default function rootReducer(state, action) {
    let finalstate = appReducer(state, action);
    return finalstate;
}
