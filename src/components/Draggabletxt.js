import React, { memo, useState } from 'react'
import {  TextInput, View } from 'react-native';
import { responsiveWidth } from '../constant/theme';


const TextDraggable = (props) => {
    const { footerRemover,onChangeText22,FooterColorTxt, fontSizefooter, FooterFontfontFamily, FooterColor, fonttxt } = props
   
    return (
        <View style={{ backgroundColor: FooterColor , height: footerRemover ? 0: null}}>
            <TextInput
                style={{
                    color: FooterColorTxt,
                    fontSize: fontSizefooter,
                    fontFamily: FooterFontfontFamily,
                    padding: 0,
                    paddingLeft: responsiveWidth("5%")
                }}
                multiline
                autoCorrect={false}
                onChangeText={ onChangeText22}
                value={fonttxt}
                placeholder={"Enter Something"}
                placeholderTextColor={FooterColorTxt}
            />
        </View>
    );
};

export default memo(TextDraggable)