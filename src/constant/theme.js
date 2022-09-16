import { Platform, Dimensions, PixelRatio, StatusBar } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
import themeHelper from "../helper/theme";

const orientation = "PORTRAIT";

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const mainScale = (size) => (SCREEN_WIDTH / guidelineBaseWidth) * size;
const verticalScale = (size) => (SCREEN_HEIGHT / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (mainScale(size) - size) * factor;

const IS_IPAD = SCREEN_HEIGHT / SCREEN_WIDTH < 1.6;
const scale = SCREEN_WIDTH / 320;

function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return !themeHelper.isPotrait(orientation)
      ? Math.round(PixelRatio.roundToNearestPixel(newSize)) / 2
      : Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return !themeHelper.isPotrait(orientation)
      ? Math.round(PixelRatio.roundToNearestPixel(newSize)) / 2
      : Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
}

export const color = {
  transparent: "transparent",
  transparentGray: "rgba(71, 71, 71, 0.5)",
  transparentWhite: "rgba(255,255,255,0.83)",
  black: "#000000",
  white: "#FFFFFF",
  primary: "#00656f",
  red: "#A52A2A",
  dark: "#F2F2F2",
  blur: "#00008B",
  gray: "gray",
  navyblue: "#043f5d",
  darkwhitep: "#FAFAFA",
  darkwhite: "#F6F6F6",
  yellow: "#edd095",
  staryello: "#ffd700",
  darkgreen: "#004349",
};

export const fontSize = {
  xxxxsmall: normalize(6),
  xxxsmall: normalize(7),
  xxsmall: normalize(9),
  xsmall: normalize(10),
  minixxxx: normalize(11.2),
  minixxx: normalize(11.4),
  minixx: normalize(11.6),
  minix: normalize(11),
  mini: normalize(12),
  regular: normalize(14),
  regularx: normalize(12),
  small: normalize(15),
  smallx: normalize(16),
  medium: normalize(17),
  mediumx: normalize(18),
  large: normalize(20),
  xlarge: normalize(25),
  xxlarge: normalize(27),
  bigger: normalize(30),
  xbigger: normalize(35),
  xxbigger: normalize(40),
};

export const fontStyle = {
  italic: "italic",
  normal: "normal",
};

export const fontFamily = {
  semiBold: "Cairo-SemiBold",
  medium: "Cairo-Medium",
  extraBold: "Cairo-ExtraBold",
  bold: "Cairo-Bold",
  light: "Cairo-Light",
  regular: "Cairo-Regular",
};

export const screen = {
  screen: Dimensions.get("window"),
  screenHeight: SCREEN_HEIGHT,
  screenWidth: SCREEN_WIDTH,
  fullScreenWidth: SCREEN_WIDTH,
  fullScreenHeight: SCREEN_HEIGHT,
  statusBarHeight: StatusBar.currentHeight,
  maxUIWidth: 500,
  wp,
  hp,
  moderateScale,
  orientation,
};

export const responsiveWidth = (percentage) => {
  return themeHelper.isPotrait(orientation)
    ? wp(percentage)
    : wp(percentage) / 2;
};

export const responsiveHeight = (percentage) => {
  return themeHelper.isPotrait(orientation)
    ? hp(percentage)
    : hp(percentage) * 2;
};
