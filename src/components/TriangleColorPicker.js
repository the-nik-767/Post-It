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
        <Modal isVisible={toggleModal} animationIn={"slideInUp"}>
            <View
                style={{
                    backgroundColor: color.white,
                    borderRadius: 10,
                }}
            >
                <TriangleColorPicker
                    onColorChange={(color) => convetColor(color)}
                    onOldColorSelected={(color) => SetColorSelected(color)}
                    style={{ height: responsiveWidth("50%"), width: responsiveWidth("50%"), marginHorizontal: responsiveWidth("20%") }}
                />
                <Text style={{ alignSelf: "center", color: color.black }}>Select Color</Text>
                <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
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
                            width: responsiveWidth("25%"),
                            padding: responsiveWidth("3%"),
                            borderRadius: 5,
                            backgroundColor: color.primary
                        }}
                    />
                </View>

            </View>
        </Modal>
    )
}

export default TriangleColorPickerpopover