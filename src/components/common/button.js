import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { color, fontSize, responsiveWidth } from "../../constant/theme";


const Button = (props) => {
  return (
    <TouchableOpacity
      style={[style.buttonContainer, props.buttonContainer]}
      onPress={props.onPress}
      {...props}
    >
      <Text style={[style.titleStyle, props.titleStyle]}  {...props}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export { Button };

const style = StyleSheet.create({
  buttonContainer: {
    padding: responsiveWidth("4%"),
    backgroundColor: color.primary,
    alignItems: "center",
    borderRadius: 40,
    marginVertical: responsiveWidth("2%"),
    borderWidth: 1,
    borderColor: color.primary,
  },
  titleStyle: {
    color: color.white,
    fontSize: fontSize.regularx,
  },
});
