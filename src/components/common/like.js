import React, { useCallback, useState } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { icons } from '../../assets';
import { color, responsiveWidth } from '../../constant/theme'


export const Like = (props) => {
    const [Liked, SetLiked] = useState(false);

    const onLikePress = useCallback(() => {
        SetLiked(false);
    }, [Liked]);

    const onUnLikePress = useCallback(() => {
        SetLiked(true);
    }, [Liked]);

    return (
        <View style={{ backgroundColor: color.white, flex: 1, justifyContent: "center", alignItems: "center", }}>
            <TouchableOpacity onPress={Liked ? onLikePress : onUnLikePress}>
                {Liked ? (<Image
                    style={[style.tinyLogo]}
                    source={icons.ic_like}
                />) : (<Image
                    style={[style.tinyLogo]}
                    source={icons.ic_unlike}
                />)}
            </TouchableOpacity>
        </View>
    )
}


const style = StyleSheet.create({
    tinyLogo: {
        width: responsiveWidth("7%"),
        height: responsiveWidth("7%"),
    }
});
