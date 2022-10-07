import React, { useState } from 'react'
import { Text, View } from 'react-native';
import Modal from "react-native-modal";
import { TriangleColorPicker, toHsv, fromHsv } from 'react-native-color-picker';
import { Button } from './common/button';
import { color, responsiveWidth } from '../constant/theme';

const TriangleColorPickerpopover = (props) => {
    const { toggleModal } = props

    const [ColorSelected, SetColorSelected] = useState(color.white)


    const convetColor = (color) => {
        let colorCode = fromHsv({ h: color.h, s: color.s, v: color.v })
        SetColorSelected(colorCode);
    }

    return (
        // <Modal isVisible={toggleModal} animationIn={"slideInUp"}>
        <View
            style={{
                backgroundColor: color.transparent,
                flex: 1, 
                paddingHorizontal:responsiveWidth("30%")
            }}
        >
            <TriangleColorPicker
            hideControls={true}
            style={{ height: responsiveWidth("40%"), width: responsiveWidth("40%")}}
                onColorChange={(color) => {
                    let colorCode = fromHsv({ h: color.h, s: color.s, v: color.v })
                    props.FooterColorhandle(colorCode)
                }}
                onOldColorSelected={(color) => {
                    let colorCode = fromHsv({ h: color.h, s: color.s, v: color.v })
                    props.FooterColorhandle(colorCode)
                }}
               
            />
            {/* <Text style={{ alignSelf: "center", color: color.black }}>Select Color</Text> */}
            {/* <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
                <Button
                    title={"Back"}
                    onPress={() => props.ToggleModalHandler()}
                    buttonContainer={{
                        width: responsiveWidth("25%"),
                        padding: responsiveWidth("3%"),
                        borderRadius: 5,
                        backgroundColor: color.primary,
                    }}
                />
                <Button
                    title={"save"}
                    onPress={() => props.FooterColorhandle(ColorSelected)}
                    buttonContainer={{
                        width: responsiveWidth("20%"),
                        padding: responsiveWidth("1%"),
                        borderRadius: 5,
                        backgroundColor: color.primary
                    }}
                />
            </View> */}

        </View>
        // </Modal>
    )
}

export default TriangleColorPickerpopover