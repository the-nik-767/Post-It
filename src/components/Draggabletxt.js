import React, { memo, useState } from 'react'
import { Text, TextInput, View } from 'react-native';
import Draggable from 'react-native-draggable';
import { color, responsiveWidth } from '../constant/theme';
import { DragTextEditor } from './dregTxt';


const TextDraggable = (props) => {
    const { FooterColorTxt, fontSizefooter, FooterFontfontFamily, footerSizedreg, FooterColor } = props

    const [text, onChangeText22] = useState("");
    const [handleChangeFocus, sethandleChangeFocus] = useState(false)
    const [width, setwidth] = useState(20)
    const [hp, sethp] = useState(50)

    return (

        <View style={{ backgroundColor: FooterColor }}>
            <TextInput
                style={{
                    color: FooterColorTxt,
                    fontSize: fontSizefooter,
                    fontFamily: FooterFontfontFamily,
                    padding: 0,
                    paddingLeft: responsiveWidth("5%")
                    // borderWidth: handleChangeFocus ? 1 : 0,
                    // width: footerSizedreg * 40
                    // flex: 1,
                    // width: width,
                    // height: hp
                    // backgroundColor: handleChangeFocus ? color.yellow : null,
                }}
                // numberOfLines={2}
                // maxLength={40}
                multiline
                autoCorrect={false}
                onContentSizeChange={(event) => {
                    setwidth(event.nativeEvent.contentSize.width)
                    sethp(event.nativeEvent.contentSize.height)
                }}
                // onEndEditing={(e) => console.log("dfg", e)}
                onBlur={() => { sethandleChangeFocus(false) }}
                onFocus={() => { sethandleChangeFocus(true) }}
                onChangeText={(i) => onChangeText22(i)}
                value={text}
                placeholder={"Enter Something"}
                placeholderTextColor={FooterColorTxt}
            />
        </View>
    );
};

export default memo(TextDraggable)