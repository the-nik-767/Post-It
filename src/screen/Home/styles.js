import { StyleSheet } from "react-native";
import { color, fontSize, responsiveWidth } from "../../constant/theme";

export const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        backgroundColor: color.darkwhite
    },
    textcontainer: {
        fontSize: fontSize.medium,
        fontWeight: "600",
        alignSelf: "center",
        color: color.black
    },
    CatagoryContainer: {
        backgroundColor: color.darkwhite,
        borderRadius: responsiveWidth("27%"),
        marginHorizontal: responsiveWidth("3%"),
        width: responsiveWidth("27%"),
        height: responsiveWidth("20%"),
        justifyContent: "center",
        alignItems: "center",
        padding: responsiveWidth("1%"),
        paddingTop: responsiveWidth("2%"),
        marginVertical: responsiveWidth("5%"),
        shadowColor: color.black,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5
    },
    CatagoryContainertxt: {
        color: color.black,
        fontSize: fontSize.xsmall,
        marginTop: responsiveWidth("2")
    },
    EmptyContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    boximage: {
        height: responsiveWidth("12"),
        width: responsiveWidth("24"),
        marginTop: responsiveWidth("50%")
    },
    NoText: {
        color: color.black,
        fontSize: fontSize.regular
    },
    FlatListContainer: {
        backgroundColor: color.darkwhite,
        paddingBottom: responsiveWidth("25%")
    }
});