import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { icons } from '../../assets';
import { color, responsiveWidth } from '../../constant/theme'


export const Like = (props) => {
    const navigation = useNavigation()
    const onEditPress = () => {
        navigation.navigate("EditPhoto", { data: props.data });
    }

    return (
        <TouchableOpacity activeOpacity={0.9} onPress={onEditPress} style={{ backgroundColor: color.white, flex: 1, justifyContent: "center", alignItems: "center", }}>
            <View >
                <Image
                    style={[style.tinyLogo]}
                    source={icons.ic_editpic}
                />
            </View>
        </TouchableOpacity >
    )
}


const style = StyleSheet.create({
    tinyLogo: {
        width: responsiveWidth("7%"),
        height: responsiveWidth("7%"),
    }
});
