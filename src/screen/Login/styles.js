import { StyleSheet } from "react-native";
import { color, responsiveWidth } from "../../constant/theme";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: color.white,
        flex: 1
    },
    sectionContainer: {
        paddingHorizontal: responsiveWidth("5%"),
        paddingVertical: responsiveWidth("15%")
    }
});