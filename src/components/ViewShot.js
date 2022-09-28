import React from 'react'
import { ImageBackground, View } from 'react-native';
import ViewShot from "react-native-view-shot";
import { color, responsiveWidth } from '../constant/theme';
import { styles } from '../screen/EditPhoto/styles';
import DraggableImage from './DraggableImage';
import TextDraggable from './Draggabletxt';

const ViewShotSS = (props) => {

    const { footerRemover, viewShotRefss, img, fontSizefooter, FooterColorTxt, FooterFontfontFamily, FooterColor, footerSizedreg, footerSizefooter } = props

    return (
        <View style={{ marginTop: responsiveWidth("5%") }}>
            {/* <ViewShot ref={viewShotRefss} style={{ backgroundColor: color.transparent }}>
                <View style={[styles.ssContainer, { height: responsiveWidth(footerSizefooter), width: "100%" }]}>
                    <ImageBackground
                        source={{ uri: img }}
                        style={styles.imageBackgroundContainer}
                        resizeMode="contain"
                    >
                        <DraggableImage />
                    </ImageBackground>
                    <View style={{ backgroundColor: FooterColor, flex: 1 }} >
                        <TextDraggable footerSizedreg={footerSizedreg} fontSizefooter={fontSizefooter} FooterColorTxt={FooterColorTxt} FooterFontfontFamily={FooterFontfontFamily} />
                    </View>
                </View>
            </ViewShot> */}
            <ViewShot ref={viewShotRefss} style={{ backgroundColor: color.transparent }}>
                <ImageBackground
                    source={{ uri: img }}
                    style={styles.imageBackgroundContainer}
                // resizeMode="contain"
                >
                    <DraggableImage />
                </ImageBackground>

                {footerRemover && (<TextDraggable FooterColor={FooterColor} footerSizedreg={footerSizedreg} fontSizefooter={fontSizefooter} FooterColorTxt={FooterColorTxt} FooterFontfontFamily={FooterFontfontFamily} />)}
            </ViewShot>
        </View>

    )
}

export default ViewShotSS