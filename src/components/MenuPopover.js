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
                <Image
                    source={icons.ic_font_adjustment}
                    style={{
                        height: responsiveWidth("5%"),
                        width: responsiveWidth("5%"),
                        margin: 15
                    }}
                    resizeMode="contain"
                />
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