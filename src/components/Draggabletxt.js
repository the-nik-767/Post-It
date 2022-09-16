import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native';
import Draggable from 'react-native-draggable';
import { responsiveWidth } from '../constant/theme';


const TextDraggable = (props) => {
    const [text, onChangeText22] = useState("footer description");
    const [handleChangeFocus, sethandleChangeFocus] = useState(false)

    return (
        <View style={{ flex: 1 }}>
            {handleChangeFocus === true ? (<TextInput
                style={{ width: "100%", height: 50, marginTop: -19, }}
                // numberOfLines={1}
                // maxLength={40}
                multiline
                autoCorrect={false}
                onEndEditing={(e) => console.log("dfg", e)}
                onBlur={() => { sethandleChangeFocus(false) }}
                onFocus={() => { sethandleChangeFocus(true) }}
                onChangeText={(i) => onChangeText22(i)}
                value={text}
                placeholder={text}
                placeholderTextColor={props.FooterColorTxt}
            />) : (<View>
                <Draggable
                    x={responsiveWidth(0)}
                    y={responsiveWidth(-1)}
                    minX={responsiveWidth("0%")}
                    maxX={responsiveWidth("100%")}
                    minY={responsiveWidth(-1)}
                    maxY={responsiveWidth(4)}
                    onPressIn={() => console.log("wuhdue")}
                    onLongPress={() => { sethandleChangeFocus(true) }}
                >
                    <Text
                        style={{
                            color: handleChangeFocus === true ? "#ffffff00" : props.FooterColorTxt,
                            fontSize: 25,
                            fontFamily: props.FooterFontfontFamily
                        }}>{text}</Text>
                </Draggable>
            </View>)}

        </View>
    );
};

export default TextDraggable