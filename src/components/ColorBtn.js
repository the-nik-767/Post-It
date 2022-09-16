import React, { useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { color, responsiveWidth } from '../constant/theme'
import { styles } from '../screen/EditPhoto/styles';


const ColorBtn = (props) => {
    const [photoText, setphotoText] = useState(false);

    return (
        <TouchableOpacity onPress={() => { setphotoText(true) }} style={[styles.ColorContainer]}>
            {photoText != true && (
                <Text style={{ color: color.black }}>Font Color</Text>
            )}
            {photoText === true && (
                <View style={[styles.colorTxtbtn, { backgroundColor: photoText === true ? PhotoColorTxt : color.white, width: photoText != true ? 0 : responsiveWidth("20%") }]} />
            )}
        </TouchableOpacity>
    )
}

export default ColorBtn