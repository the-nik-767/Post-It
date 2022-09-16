import { StyleSheet } from "react-native";
import { color, fontSize, responsiveWidth } from "../../constant/theme";

export const styles = StyleSheet.create({
    pikContainer: {
        backgroundColor: color.darkwhitep,
        margin: responsiveWidth("3%"),
        borderRadius: 10,
        borderColor: color.gray,
        borderWidth: 1
    },
    firstviwecontainer: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 7,
    },
    textcontainer: {
        color: color.black,
        marginLeft: responsiveWidth("3%"),
        flex: 1,
        fontSize: fontSize.mini,
        padding: responsiveWidth(3.5)
    },
    modalView: {
        backgroundColor: "white",
        padding: responsiveWidth("5%"),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: color.transparentGray
    },
    tinyLogo: {
        width: responsiveWidth("6%"),
        height: responsiveWidth("6%"),
        resizeMode: "contain",
        bottom: responsiveWidth("1%"),
        left: responsiveWidth("1%"),

    },
});