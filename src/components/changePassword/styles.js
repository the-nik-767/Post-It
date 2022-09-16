import { StyleSheet } from "react-native";
import { color, fontSize, responsiveWidth } from "../../constant/theme";

export const styles = StyleSheet.create({
    pikContainer: {
        backgroundColor: color.darkwhitep,
        marginHorizontal: responsiveWidth("3%"),
        marginVertical: responsiveWidth("2%"),
        borderRadius: 10,
        borderColor: color.gray,
        borderWidth: 0.5
    },
    firstviwecontainer: {
        flexDirection: "row",
        backgroundColor: color.white,
        alignItems: "center",
        borderRadius: 7,
        // alignSelf: "center"
    },
    textcontainer: {
        color: color.black,
        marginLeft: responsiveWidth("3%"),
        flex: 1,
        fontSize: fontSize.mini,
        padding: responsiveWidth(3.5)
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    tinyLogo: {
        width: responsiveWidth("6%"),
        height: responsiveWidth("6%"),
        resizeMode: "contain",
        bottom: responsiveWidth("4%"),
        left: responsiveWidth("4%")
    },
});