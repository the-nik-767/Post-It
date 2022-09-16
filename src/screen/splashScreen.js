import React, { Component } from "react";
import { StyleSheet, View, Image, UIManager, } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from "react-redux";
import { getUserData } from "../redux/actions/userAction";
import { icons } from "../assets";
import { color, responsiveWidth } from "../constant/theme";
import { getPosterData } from "../redux/actions/posterDataAction";

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

  async componentDidMount() {
    const jsonValue = await AsyncStorage.getItem("USER_DATA");
    const data = jsonValue != null ? JSON.parse(jsonValue) : null;
    // console.log("getUserdata", data);
    // const id = data.id;
    // console.log("newid", id);
    // console.log("datatitl", data.title);
    if (data != null) {
      const id = data.id;
      this.props.getUserData(id);
      this.props.getPosterData(false);
      // setTimeout(() => {
      this.props.navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      })
      // }, 100)
    } else {
      setTimeout(() => {
        this.props.navigation.reset({
          index: 0,
          routes: [{ name: "Mockup" }],
        })
      }, 100)
    }
  }

  render() {

    return (
      <View style={style.mainContenar} >
        <Image style={[style.SplashScreenPicContainer, { top: responsiveWidth("14%"), left: responsiveWidth("10%") }]} source={icons.ic_logoSplah} />
        <Image style={[style.SplashScreenPicContainer, { bottom: responsiveWidth("20%"), right: responsiveWidth("4%") }]} source={icons.ic_logoSplahName} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  SplashScreenPicContainer: {
    height: responsiveWidth("60%"),
    width: responsiveWidth("60%"),
    resizeMode: "contain"
  },
  mainContenar: {
    flex: 1,
    backgroundColor: color.white,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default connect(null, {
  getUserData,
  getPosterData
})(SplashScreen);
