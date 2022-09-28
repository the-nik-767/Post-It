import React, { useState } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import Share from 'react-native-share';
import { icons } from '../assets';
import { color, responsiveWidth } from '../constant/theme';
import { Loader } from './loader';

function BottomBtnShare(props) {
    const { imgURL } = props
    const [isVisible, setisVisible] = useState(false)

    const onPressShare = () => {
        setisVisible(true)
        imgURL.current.capture().then(uri => {
            const shareOptions = {
                title: 'Share via',
                url: uri,
                social: Share.Social.WHATSAPP
            };
            Share.open(shareOptions)
                .then((res) => {
                    console.log(res);
                    setisVisible(false)
                })
                .catch((err) => {
                    console.log(err);
                    setisVisible(false)
                });
        })
    };

    return (
        <TouchableOpacity activeOpacity={0.9} onPress={onPressShare} style={styles.bottomContainer}>
            {!isVisible && (
                <View >
                    <Image
                        style={[styles.tinyLogo]}
                        source={icons.ic_send}
                    />
                </View>)}
            <Loader isVisible={isVisible} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    bottomContainer: {
        backgroundColor: color.primary,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    tinyLogo: {
        width: responsiveWidth("6%"),
        height: responsiveWidth("6%"),
        tintColor: color.white
    }
});


export default BottomBtnShare 