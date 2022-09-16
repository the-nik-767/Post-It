import React from 'react'
import { ImageBackground, View } from 'react-native';
import ViewShot from "react-native-view-shot";
import { color, responsiveWidth } from '../constant/theme';
import { styles } from '../screen/EditPhoto/styles';
import DraggabelPartyIcon from './DraggabelPartyIcon';
import DraggableImage from './DraggableImage';
import TextDraggable from './Draggabletxt';
import PhotoTxtDraggable from './PhotoTxtDraggable';

const ViewShotSS = (props) => {

    const { viewShotRefss, Footer, img, phototxtshow, PhotoColorTxt, fontSizephoto, PhotoFontfontFamily, fontSizefooter, FooterColorTxt, FooterFontfontFamily, FooterColor, setphototxtshow, PartyIconshow } = props

    return (
        <View style={{ marginTop: responsiveWidth("5%") }}>
            <ViewShot ref={viewShotRefss} style={{ backgroundColor: color.transparent }}>
                <View style={[styles.ssContainer, { height: Footer === true ? responsiveWidth("74%") : responsiveWidth("70%"), width: "100%", }]}>
                    <ImageBackground
                        source={{ uri: img }}
                        style={styles.imageBackgroundContainer}
                        resizeMode="contain"
                    >
                        {/* {PartyIconshow === true && (< DraggabelPartyIcon />)} */}
                        <DraggableImage />
                        {/* {phototxtshow === true && (
                            <PhotoTxtDraggable PhotoColorTxt={PhotoColorTxt} fontSizephoto={fontSizephoto} PhotoFontfontFamily={PhotoFontfontFamily} setphototxtshow={setphototxtshow} />
                        )
                        } */}
                    </ImageBackground>
                    {Footer === true && (
                        <View style={{ backgroundColor: FooterColor, flex: 1 }} >
                            <TextDraggable fontSizefooter={fontSizefooter} FooterColorTxt={FooterColorTxt} FooterFontfontFamily={FooterFontfontFamily} />
                        </View>)
                    }
                </View>

            </ViewShot>
        </View>

    )
}

export default ViewShotSS