import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { color, responsiveWidth } from '../constant/theme'
import { styles } from '../screen/EditPhoto/styles'
import FontFamilyBtn from './FontFamilyBtn'
import FontSizeHandler from './FontSizeHandler'
import HandleBtn from './HandleBtn'
import TriangleColorPickerpopover from './TriangleColorPicker'

const EditPhotoSection = (props) => {
    const { PhotoFontfontFamily, selecthandle1, fontSizephotoHandler, PhotoColorTxt, phototxtshow, PhotoColorhandletxt, Footerhandle } = props
    const [photoText, setphotoText] = useState(false);
    const [toggleModal3, setToggleModal3] = useState(false);

    const Colorhandle3 = () => {
        setToggleModal3(true)
        setphotoText(true)
    }

    return (
        <View style={styles.bottomContainer}>
            <FontFamilyBtn FooterFontfontFamily={PhotoFontfontFamily} selecthandle={selecthandle1} />
            <FontSizeHandler maximumValue={44} fontSizefooterHandler={fontSizephotoHandler} />
            <TouchableOpacity onPress={Colorhandle3} style={[styles.ColorContainer]}>
                {photoText != true && (
                    <Text style={{ color: color.black }}>Font Color</Text>
                )}
                {photoText === true && (
                    <View style={[styles.colorTxtbtn, { backgroundColor: photoText === true ? PhotoColorTxt : color.white, width: photoText != true ? 0 : responsiveWidth("20%") }]} />
                )}
            </TouchableOpacity>
            <HandleBtn HandleBtnstyle={{ marginVertical: responsiveWidth("1%") }} showhandler={phototxtshow} Footerhandle={Footerhandle} addTitle={"Add Text"} removeTitle={"Remove Text"} />
            <TriangleColorPickerpopover toggleModal={toggleModal3} FooterColorhandle={PhotoColorhandletxt} ToggleModalHandler={() => setToggleModal3(false)} />
        </View>
    )
}

export default EditPhotoSection