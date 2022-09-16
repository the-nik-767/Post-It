import React from "react";
import { Image, Text, View } from "react-native";
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import { icons } from "../assets";
import { color, responsiveWidth } from "../constant/theme";
import { styles } from "../screen/EditPhoto/styles";



const Menupopover = (props) => {

    const Menuitem = [
        {
            title: "Aa",
            fonst: "Inspiration-Regular",

        },
        {
            title: "Aa",
            fonst: "Caveat-VariableFont_wght"
        },
        {
            title: "Aa",
            fonst: "OleoScriptSwashCaps-Regular"
        }, {
            title: "Aa",
            fonst: "Roboto-Light"
        },
        {
            title: "Aa",
            fonst: "Roboto-Medium"
        }
        ,
        {
            title: "Aa",
            fonst: "Roboto-ThinItalic"
        }
    ]

    return (
        <Menu>
            <MenuTrigger>
                <View style={[styles.ColorContainer, { justifyContent: "space-between", marginVertical: responsiveWidth("0%") }]}>
                    <Text style={[styles.FontStyletxt, { fontFamily: props.FooterFontfontFamily }]}>Font Style</Text>
                    <Image
                        source={icons.ic_dots}
                        style={{
                            height: responsiveWidth("3%"),
                            width: responsiveWidth("3%"),
                            margin: 5
                        }}
                        resizeMode="contain"
                    /></View>
            </MenuTrigger>
            <MenuOptions  >
                {
                    Menuitem.map((Item) => {
                        return (
                            <MenuOption key={Item.title} onSelect={() => props.selecthandle(Item)}  >
                                <Text style={{ color: color.black, fontFamily: Item.fonst }}>{Item.title}</Text>
                            </MenuOption>
                        )
                    })
                }
            </MenuOptions>
        </Menu>)
}
export default Menupopover