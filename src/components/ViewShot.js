import React from 'react'
import { ImageBackground, View } from 'react-native';
import ViewShot from "react-native-view-shot";
import { color, responsiveWidth } from '../constant/theme';
import { styles } from '../screen/EditPhoto/styles';
import DraggableImage from './DraggableImage';
import TextDraggable from './Draggabletxt';

const ViewShotSS = (props) => {

    const {onChangeText22,fonttxt, footerRemover, viewShotRefss, img, fontSizefooter, FooterColorTxt, FooterFontfontFamily, FooterColor, footerSizedreg, footerSizefooter } = props

    return (
        <View style={{ marginTop: responsiveWidth("5%") }}>
            <ViewShot ref={viewShotRefss} style={{ backgroundColor: color.transparent }}>
                <ImageBackground
                    source={{ uri: img }}
                    style={styles.imageBackgroundContainer}
                >
                    <DraggableImage />
                </ImageBackground>
                <TextDraggable footerRemover={footerRemover} onChangeText22={onChangeText22} fonttxt={fonttxt} FooterColor={FooterColor} footerSizedreg={footerSizedreg} fontSizefooter={fontSizefooter} FooterColorTxt={FooterColorTxt} FooterFontfontFamily={FooterFontfontFamily} />
            </ViewShot>
        </View>

    )
}

export default ViewShotSS