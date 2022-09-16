import { POST_DATA, } from "./types";
import firestore from "@react-native-firebase/firestore";

export const getpostData = () => async (dispatch) => {
    return firestore()
        .collection("postList")
        .get()
        .then(async (documentSnapshot) => {
            const listdata = []
            let tempdata = documentSnapshot.forEach((documentSnapshot) => {
                const searching = documentSnapshot.data();
                listdata.push(searching)
                // console.log("searching------", searching);
            })
            dispatch({ type: POST_DATA, payload: listdata });
        })
        .catch((e) => {
            console.log("e", e);
        });
};
