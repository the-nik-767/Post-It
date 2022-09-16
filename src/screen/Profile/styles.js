import { StyleSheet } from "react-native";
import { color, fontSize, responsiveWidth } from "../../constant/theme";

export const style = StyleSheet.create({
    profilePicContainer: {
        height: responsiveWidth("30%"),
        width: responsiveWidth("30%"),
        borderRadius: 60,
        resizeMode: "cover",
    },
    tinyLogo: {
        width: responsiveWidth("6%"),
        height: responsiveWidth("6%"),
        resizeMode: "contain"
    },
    topviewContainer: {
        flexDirection: "row",
        backgroundColor: color.white,
        alignItems: "center",
        marginHorizontal: responsiveWidth("5%"),
        borderRadius: 7,
        marginVertical: responsiveWidth("3%")
    },
    textContainer: {
        color: color.black,
        marginLeft: responsiveWidth("3%"),
        flex: 0.6
    },
    tinyLogoplus: {
        width: responsiveWidth("7%"),
        height: responsiveWidth("7%"),
    },
    addContainer: {
        alignItems: "center",
        right: 0,
        backgroundColor: color.green,
        position: "absolute",
        alignSelf: "flex-end",
        borderRadius: 50,
        height: responsiveWidth("9%"),
        width: responsiveWidth("9%"),
        justifyContent: "center"
    },
    inputContainer: {
        flex: 1
    },
    profileviwecontainer: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: responsiveWidth("2%"),
        flexDirection: "row",
        alignSelf: "center",
        borderWidth: 1,
        borderRadius: responsiveWidth("15%"),
        borderColor: color.gray
    },
    passwordContainer: {
        flexDirection: "row",
        backgroundColor: color.white,
        marginHorizontal: responsiveWidth("5%"),
        borderRadius: 7,
        marginVertical: responsiveWidth("3%"),
        paddingVertical: responsiveWidth("4%")
    },
    pikContainer: {
        backgroundColor: color.darkwhitep,
        marginHorizontal: responsiveWidth("3%"),
        marginVertical: responsiveWidth("2%"),
        borderRadius: 10,
        borderColor: color.gray,
        borderWidth: 0.5
    },

    textcontainer: {
        color: color.black,
        marginLeft: responsiveWidth("3%"),
        flex: 1,
        fontSize: fontSize.mini,
    },
    nextcontainer: {
        width: responsiveWidth("6%"),
        height: responsiveWidth("6%"),
    },
    aboutLogo: {
        width: responsiveWidth("5.2%"),
        height: responsiveWidth("5.2%"),
        resizeMode: "contain"
    },
    detelcontainer: {
        // flex: 1,
        color: color.black,
        paddingRight: responsiveWidth("1%"),
    },
    firstviwecontainer: {
        flexDirection: "row",
        backgroundColor: color.white,
        alignItems: "center",
        borderRadius: 7,
    },
    editLogo: {
        width: responsiveWidth("6.5%"),
        height: responsiveWidth("6.5%"),
        resizeMode: "contain"
    },
    infocontainer: {
        fontSize: fontSize.small,
        fontWeight: "600",
        color: color.black,
        marginLeft: responsiveWidth("4%"),
        marginTop: responsiveWidth("4%")
    }
});
