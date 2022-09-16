import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { icons } from "../../assets";
import { color, fontSize, responsiveWidth } from "../../constant/theme";

export const Header = (props) => {
  const { goBack } = useNavigation();
  return (
    <SafeAreaView>
      <View style={style.headerContainer}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          {props.showBack ? (
            <TouchableOpacity onPress={() => goBack()}>
              <Image
                style={[style.tinyLogo, props.arrowStyle]}
                source={icons.icBcak}
              />
            </TouchableOpacity>
          ) : null}
          {props.leftContainer}
        </View>
        <View
          style={{ flex: 4, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={[style.textcontainer, props.textcontainermiddal]}>{props.title}</Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}
        >
          {props.rightContainer}
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    paddingVertical: responsiveWidth("2%"),
    paddingHorizontal: responsiveWidth("4%"),
    backgroundColor: color.white
  },
  textcontainer: {
    fontSize: fontSize.large,
    fontWeight: "600",
    alignSelf: "center",
    color: color.black
  },
  tinyLogo: {
    width: responsiveWidth("6%"),
    height: responsiveWidth("6%"),
    tintColor: color.black
  }
});
