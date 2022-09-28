import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { icons } from '../assets';
import { responsiveWidth } from '../constant/theme';
import { styles } from '../screen/EditPhoto/styles';
import FontSizeSlider from './FontSizeSlider';

function FontSizeHandler(props) {
    const [toggleModal1, setToggleModal1] = useState(false);

    return (
        <View>
            <TouchableOpacity onPress={() => setToggleModal1(!toggleModal1)} >
                <Image
                    source={icons.ic_font_typography}
                    style={{
                        height: responsiveWidth("5%"),
                        width: responsiveWidth("5%"),
                        margin: 15
                    }}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            <FontSizeSlider maximumValue={props.maximumValue} toggleModal1={toggleModal1} ToggleModalHandler1={() => setToggleModal1(!toggleModal1)} fontSizefooterHandler={props.fontSizefooterHandler} />
        </View>
    )
}

export default FontSizeHandler