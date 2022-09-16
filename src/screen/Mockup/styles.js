import { StyleSheet } from "react-native";
import { color, responsiveHeight, responsiveWidth } from "../../constant/theme";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.primary
    },
    subContainer: { backgroundColor: color.white },
    maintop: {
        backgroundColor: color.primary,
        height: responsiveHeight("40%"),
        borderBottomLeftRadius: 150,
        alignItems: "center",
        justifyContent: "center"
    },
    bottomContainer: {
        paddingTop: responsiveHeight("10%"),
        paddingBottom: responsiveHeight("25%"),
        flex: 2,
        backgroundColor: color.white,
        borderTopRightRadius: 80,
        paddingHorizontal: responsiveWidth("5%")
    },
    buttonContainer: {
        padding: responsiveWidth("4%"),
        backgroundColor: color.primary,
        alignItems: "center",
        borderRadius: 40,
        marginHorizontal: responsiveWidth("5%"),
        marginVertical: responsiveWidth("2%"),
        borderWidth: 1,
        borderColor: color.primary
    },
    SplashScreenPicContainer: {
        height: responsiveWidth("55%"),
        width: responsiveWidth("55%"),
        resizeMode: "contain",
        tintColor: color.white
    }
});