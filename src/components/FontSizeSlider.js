import React, { useState } from 'react'
import { Text, View ,Slider} from 'react-native';
import Modal from "react-native-modal";
import { Button } from './common/button';
// import Slider from '@react-native-community/slider'
import { color, responsiveWidth } from '../constant/theme';

const FontSizeSlider = (props) => {
    const { minValue, maximumValue, showBack } = props

    const [size, setsize] = useState(minValue)
    return (
        // <Modal isVisible={props.toggleModal1} animationIn={"slideInUp"}>
        <View style={{
            backgroundColor: color.transparent,
            borderRadius: 10,
            marginTop: responsiveWidth("5%"),
           
            flex: 1
        }}>
            <Slider
                minimumValue={minValue}
                style={{ marginTop: responsiveWidth("1%"), height:responsiveWidth("10%"), }}
                maximumValue={maximumValue}
                value={size}
                
                onSlidingComplete={(value) => {
                    props.fontSizefooterHandler(parseInt(value))
                    // setsize(parseInt(value))
                }}
            />
            {/* {showBack &&
                (<View style={{ height: 25, width: "100%", alignSelf: "center", }}>
                    <Text style={{ color: color.black, alignSelf: "center", }}> Select Font Size</Text>
                </View>)}
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
                        // props.ToggleModalHandler1()
                    }}
                    buttonContainer={{
                        width: responsiveWidth("25%"),
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

export default FontSizeSlider