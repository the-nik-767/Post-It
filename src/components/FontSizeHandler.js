import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../screen/EditPhoto/styles';
import FontSizeSlider from './FontSizeSlider';

function FontSizeHandler(props) {
    const [toggleModal1, setToggleModal1] = useState(false);

    return (
        <View>
            <TouchableOpacity onPress={() => setToggleModal1(!toggleModal1)} style={styles.ColorContainer}>
                <Text style={styles.colorTxt}>Font Size</Text>
            </TouchableOpacity>
            <FontSizeSlider maximumValue={props.maximumValue} toggleModal1={toggleModal1} ToggleModalHandler1={() => setToggleModal1(!toggleModal1)} fontSizefooterHandler={props.fontSizefooterHandler} />
        </View>
    )
}

export default FontSizeHandler