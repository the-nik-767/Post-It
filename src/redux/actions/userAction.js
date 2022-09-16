import { USER_DATA } from "./types";
import firestore from "@react-native-firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getPosterData } from "./posterDataAction";

export const getUserData = (id, collectionName) => async (dispatch) => {
  let tempName = collectionName ? collectionName : "user";
  return firestore()
    .collection(tempName)
    .doc(id)
    .get()
    .then(async (documentSnapshot) => {
      dispatch(getPosterData(false))
      if (documentSnapshot.exists) {
        const userData = documentSnapshot.data();
        await AsyncStorage.setItem("USER_DATA", JSON.stringify(userData));
        dispatch({ type: USER_DATA, payload: userData });
        return userData;
      } else {
        return null;
      }
    })
    .catch((e) => {
      dispatch(getPosterData(false))
      console.log("upadatdata upadatdata error => ", e);
      return null;
    });
};
