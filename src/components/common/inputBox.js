import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { icons } from "../../assets";
import { color, responsiveWidth } from "../../constant/theme";

const InputBox = (props) => {
  const [isFocus, setIsFocus] = React.useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View
      style={[
        style.inputboxContainer,
        {
          borderColor: isFocus ? color.primary : color.dark,
          borderWidth: 1,
          color: color.red,
        },
        props.inputboxContainer,
        props.style,
      ]}
    >
      <TextInput
        {...props}
        onChange={props.onChange}
        style={{ color: color.black, width: "85%" }}
        placeholderTextColor={color.gray}
        placeholder={props.title}
        value={props.value}
        onChangeText={props.onChangeText}
        secureTextEntry={
          props.secureTextEntry ? (showPassword ? false : true) : null
        }
        onBlur={() => {
          setIsFocus(false);
        }}
        onFocus={() => {
          setIsFocus(true);
        }}
      />
      {props.showEyeIcon && (
        <TouchableOpacity
          onPress={() => {
            setShowPassword(!showPassword);
          }}
        >
          <Image
            style={{
              height: 18,
              width: 18,
              tintColor: color.black,
              marginRight: widthPercentageToDP(3),
            }}
            source={showPassword ? icons.hidden : icons.view}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export { InputBox };

const style = StyleSheet.create({
  inputboxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: responsiveWidth("3.5%"),
    backgroundColor: color.dark,
    borderRadius: 30,
    marginTop: responsiveWidth("5%"),
    paddingVertical:
      Platform.OS == "android"
        ? responsiveWidth("0.5%")
        : responsiveWidth("4%")
  }
});
