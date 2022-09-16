import React from 'react'
import { View } from 'react-native'
import { styles } from '../screen/EditPhoto/styles'
import { Button } from './common/button'

const HandleBtn = (props) => {
    return (
        <View style={[props.HandleBtnstyle]}>
            {props.showhandler != true ?
                <Button
                    title={props.addTitle}
                    titleStyle={styles.colorTxt}
                    onPress={props.Footerhandle}
                    buttonContainer={styles.ColorContainer}
                /> :
                <Button
                    title={props.removeTitle}
                    titleStyle={styles.colorTxt}
                    onPress={props.Footerhandle}
                    buttonContainer={styles.ColorContainer}
                />}
        </View>
    )
}

export default HandleBtn