import React, { useState } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import Share from 'react-native-share';
import { icons } from '../assets';
import { color, responsiveWidth } from '../constant/theme';
import { Loader } from './loader';

function BtnShare(props) {
    const { viewShotRef } = props
    const [isVisible, setisVisible] = useState(false)

    const onPressShare = () => {
        setisVisible(true)
        viewShotRef.current.capture().then(uri => {
            // setisVisible(false)
            const shareOptions = {
                title: 'Share via',
                url: uri,
                social: Share.Social.WHATSAPP
            };
            Share.open(shareOptions)
                .then((res) => {
                    setisVisible(false)
                    console.log(res);
                })
                .catch((err) => {
                    setisVisible(false)
                    console.log(err);
                });
        })
    };

    return (
        <View style={styles.bottomContainer}>
            {!isVisible && (
                <TouchableOpacity onPress={onPressShare}>
                    <Image
                        style={[styles.tinyLogo]}
                        source={icons.ic_send}
                    />
                </TouchableOpacity>)}
            <View style={{ marginRight: responsiveWidth("4%") }}>
                <Loader isVisible={isVisible} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    bottomContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    tinyLogo: {
        width: responsiveWidth("5%"),
        height: responsiveWidth("5%")
    }
});


export default BtnShare 