import React from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
} from "react-native";
import { color } from "../constant/theme";


const Loader = ({ isVisible }) => {
  if (isVisible) {
    return (
      <View style={style.loaderContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    return null;
  }
};

export { Loader };

const style = StyleSheet.create({
  loaderContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.transparent,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
});
