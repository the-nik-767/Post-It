import React, { memo, useRef, useState, useEffect, useCallback } from 'react'
import { Image, View, ImageBackground } from 'react-native'
import FastImage from 'react-native-fast-image'
import { color } from '../../constant/theme'
import BottomBtn from '../BottomBtn'
import { Like } from '../common/like'
import { styles } from './styles';
import ViewShot from "react-native-view-shot";
import Profile from '../ProfileImage'

const PostList = (props) => {
    const ref = useRef();
    const { imgURL, id, } = props
    const [width, setwidth] = useState()
    const [height, setheight] = useState()

    useEffect(() => {
        Image.getSize(imgURL, (width, height) => {
            setwidth(width / 3)
            setheight(height / 3)
        });
    }, [imgURL])


    return (
        <View key={id} style={styles.item} >
            <View style={styles.postCard}>
                <ViewShot captureMode="mount" style={{ backgroundColor: color.transparent, justifyContent: "center", alignSelf: "center", }} ref={ref}>
                    <ImageBackground
                        source={{
                            uri: imgURL,
                            priority: FastImage.priority.high,
                        }}
                        // resizeMode="contain"
                        style={{
                            height: height,
                            width: width,
                            alignSelf: "center",
                            justifyContent: "flex-end",
                        }}
                    >
                        {/* <Profile imgss={styles.profileimgStyle} /> */}
                    </ImageBackground>
                </ViewShot>
                <View style={styles.bottomMain}>
                    <View style={styles.likeMain}>
                        <View style={styles.likeCantainer}>
                            <Like />
                        </View>
                        <View style={styles.likeSubStyle1}>
                        </View>
                        <View style={styles.likeSubStyle2}>
                        </View>
                    </View>
                    <View style={styles.sharMain}>
                        <View style={styles.sharSubStyle1}>
                        </View>
                        <View style={styles.sharSubStyle2}>
                        </View>
                        <View style={styles.sharcontainer}>
                            <BottomBtn imgURL={ref} />
                        </View>
                    </View>
                </View>
            </View>
        </View >
    )
}


export default memo(PostList)