import React, { useState } from 'react'
import { Text, View } from 'react-native';
import Modal from "react-native-modal";
import { Button } from './common/button';
import { Slider } from '@miblanchard/react-native-slider';
import { color, responsiveWidth } from '../constant/theme';

const FontSizeSlider = (props) => {
    const [size, setsize] = useState(8)
    return (
        <Modal isVisible={props.toggleModal1} animationIn={"slideInUp"}>
            <View style={{
                backgroundColor: color.white,
                borderRadius: 10
            }}>
                <Slider
                    minimumValue={8}
                    containerStyle={{ margin: responsiveWidth("5%") }}
                    maximumValue={props.maximumValue}
                    value={size}
                    onValueChange={(value) => {
                        setsize(parseInt(value))
                    }}
                />
                <View style={{ height: 50, width: "100%", alignSelf: "center", }}>
                    <Text style={{ color: color.black, alignSelf: "center", fontSize: size }}> Select Font Size</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
                    <Button
                        title={"Back"}
                        onPress={() => props.ToggleModalHandler1()}
                        buttonContainer={{
                            width: responsiveWidth("25%"),
                            padding: responsiveWidth("3%"),
                            borderRadius: 5,
                            backgroundColor: color.primary
                        }}
                    />
                    <Button
                        title={"save"}
                        onPress={() => {
                            props.fontSizefooterHandler(size)
                            props.ToggleModalHandler1()
                        }}
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

export default FontSizeSlider