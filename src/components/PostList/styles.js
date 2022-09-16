import { StyleSheet } from "react-native";
import { color, responsiveWidth } from "../../constant/theme";

export const styles = StyleSheet.create({
    item: {
        backgroundColor: color.dark,
        paddingVertical: responsiveWidth("3%")
    },
    profileimgStyle: {
        alignSelf: "flex-end",
        marginRight: responsiveWidth("5%"),
        marginBottom: responsiveWidth("3%"),
        position: "relative",
        height: responsiveWidth("17%"),
        width: responsiveWidth("17%"),
    },
    postCard: {
        shadowColor: color.black,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        borderRadius: 5,
    },
    bottomMain: {
        flex: 1,
        height: responsiveWidth("12"),
        flexDirection: "row"
    },
    likeMain: {
        backgroundColor: color.primary,
        flex: 1,
        flexDirection: "row"
    },
    likeCantainer: {
        flex: 10
    },
    likeSubStyle1: {
        backgroundColor: color.white,
        flex: 1,
        borderTopRightRadius: 15
    },
    likeSubStyle2: {
        backgroundColor: color.white,
        flex: 0
    },
    sharMain: {
        backgroundColor: color.white,
        flex: 1,
        flexDirection: "row"
    },
    sharSubStyle1: {
        backgroundColor: color.primary,
        flex: 0
    },
    sharSubStyle2: {
        backgroundColor: color.primary,
        flex: 1,
        borderBottomLeftRadius: 15
    },
    sharcontainer: {
        flex: 10
    },
    pikcontainer: {
        alignSelf: "flex-end",
        marginRight: responsiveWidth("5%"),
        position: "relative",
        height: responsiveWidth("17%"),
        width: responsiveWidth("17%")
    }
});