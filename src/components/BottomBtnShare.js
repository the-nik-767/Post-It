import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import Share from 'react-native-share';
import { icons } from '../assets';
import { color, responsiveWidth } from '../constant/theme';

function BottomBtnShare(props) {
    const { imgURL } = props

    const onPressShare = () => {
        imgURL.current.capture().then(uri => {
            const shareOptions = {
                title: 'Share via',
                url: uri,
                social: Share.Social.WHATSAPP
            };
            Share.open(shareOptions)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        })
    };

    return (
        <View style={styles.bottomContainer}>
            <TouchableOpacity onPress={onPressShare}>
                <Image
                    style={[styles.tinyLogo]}
                    source={icons.ic_send}
                />
            </TouchableOpacity>
        </View>
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