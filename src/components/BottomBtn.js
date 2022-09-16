import React from 'react'
import { View } from 'react-native'
import { color } from '../constant/theme'
import { Button } from './common/button'
import Share from 'react-native-share';
import { styles } from '../screen/EditPhoto/styles';

function BottomBtn(props) {
    const onPressShare = () => {
        props.viewShotRef.current.capture().then(uri => {
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
            <Button
                title={"Edit"}
                onPress={props.showActionSheetEdit}
                buttonContainer={[styles.FooterhandleBtn, { backgroundColor: color.primary }]}
            />
            <Button
                title={"Share"}
                onPress={onPressShare}
                buttonContainer={[styles.btnShare, { backgroundColor: color.primary }]}
            />
        </View>
    )
}

export default BottomBtn