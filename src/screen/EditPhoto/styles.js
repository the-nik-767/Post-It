
import { StyleSheet } from 'react-native';
import { color, fontSize, responsiveWidth } from '../../constant/theme'

export const styles = StyleSheet.create({
    Container: {
        flex: 1
    },
    imgStyle: {
        height: "100%",
        width: "100%",
        marginHorizontal: responsiveWidth("1%"),
        borderRadius: 5,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowColor: color.black,
        elevation: 5
    },
    ssContainer: {
        backgroundColor: color.white
    },
    tinyLogoplus: {
        width: responsiveWidth("5.5%"),
        height: responsiveWidth("5.5%")
    },
    input: {
    },
    imageBackgroundContainer: {
        height: responsiveWidth("110%"),
        width: responsiveWidth("100%"),
    },
    draggableimg: {
        height: 65,
        width: 65,
        borderRadius: 50
    },
    draggableimgicon: {
        height: 70,
        width: 70,
        backgroundColor: "transparent"
    },
    bottomContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        // marginHorizontal: responsiveWidth("2%"),
        // marginVertical: responsiveWidth("10%")
    },
    FooterhandleBtn: {
        width: responsiveWidth("45%"),
        borderRadius: 5,
        backgroundColor: color.white
    },
    btnShare: {
        width: responsiveWidth("45%"),
        borderRadius: 5
    },
    ColorContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        height: responsiveWidth("10%"),
        width: responsiveWidth("45%"),
        padding: responsiveWidth("2%"),
        borderRadius: 5,
        borderColor: color.primary,
        backgroundColor: color.white
    },
    colorBtn: {
        width: responsiveWidth("30%"),
        borderRadius: 5,
        backgroundColor: color.white,
        borderWidth: 0,
        alignItems: "center",
        padding: 0,
        marginVertical: 0
    },
    colorTxtbtn: {
        height: responsiveWidth("6%")
    },
    colorTxt: {
        color: color.black,
        fontSize: fontSize.minix
    },
    btnBack: {
        width: responsiveWidth("25%"),
        padding: responsiveWidth("3%"),
        borderRadius: 5,
        backgroundColor: color.primary,
        alignSelf: "center"
    },
    FontStyletxt: {
        marginHorizontal: responsiveWidth("3%"),
        color: color.black
    },
    bottomicon: {
        height: responsiveWidth("5%"),
        width: responsiveWidth("5%"),
        margin: 15
    }
});
