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
        <View style={{ backgroundColor: color.white, flex: 1, justifyContent: "center", alignItems: "center", }}>
            <TouchableOpacity onPress={onEditPress}>
                <Image
                    style={[style.tinyLogo]}
                    source={icons.ic_editpic}
                />
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
