import { POSTER_DATA } from "./types";

export const getPosterData = (loding) => async (dispatch) => {
    // console.log("loding", loding);
    const posterData = loding
    return (
        dispatch({ type: POSTER_DATA, payload: posterData })
    )
};
