import React, { useCallback, useRef, useState } from 'react'
import { Image, View } from 'react-native';
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import ActionSheet from "react-native-actionsheet";
import { icons } from '../assets';
import Draggable from 'react-native-draggable';
import { responsiveWidth } from '../constant/theme';
import { styles } from '../screen/EditPhoto/styles';

const DraggableImage = () => {
    let actionSheet = useRef();
    const [urll, seturll] = useState(null)


    const onPressCamera = useCallback(() => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: "images",
            },
        };
        launchCamera(options, (response) => {
            if (response.didCancel) {
            } else if (response.error) {
            } else if (response.customButton) {
                alert(response.customButton);
            } else {
                seturll(response?.assets[0]?.uri)
            }
        });
    }, [urll])

    const onPressGallery = useCallback(() => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: "images",
            },
        };
        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
            } else if (response.error) {
            } else if (response.customButton) {
                alert(response.customButton);
            } else {
                seturll(response.assets[0].uri)
            }
        });
    }, [urll])

    const ImgProfile = (props) => {
        return (
            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                <Image source={props.urll ? { uri: props.urll } : icons.ic_profile} resizeMode="cover" style={styles.draggableimg} />
            </View>
        )
    }

    return (
        <View >
            <Draggable
                isCircle={true}
                renderSize={65}
                x={responsiveWidth("75%")}
                y={responsiveWidth("50%")}
                minX={responsiveWidth("1%")}
                maxX={responsiveWidth("99%")}
                minY={responsiveWidth("2%")}
                maxY={responsiveWidth("68%")}
                onLongPress={() => actionSheet.current.show()}
                children={<ImgProfile urll={urll} />}
            />
            < ActionSheet
                ref={actionSheet}
                options={["Camera", "Gallery", "Cancel"]}
                cancelButtonIndex={2}
                destructiveButtonIndex={2}
                onPress={(index) => {
                    if (index == 0) {
                        onPressCamera();
                    } else if (index == 1) {
                        onPressGallery();
                    } else {
                        console.log("error");
                    }
                }} />
        </View>
    )
}

export default DraggableImage

