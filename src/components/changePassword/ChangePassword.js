import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Text, TouchableOpacity, View, Modal, Alert, Image } from 'react-native'
import { color } from '../../constant/theme';
import { InputBox, Button } from '../index';
import { styles } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { getAuth, updatePassword } from "firebase/auth";
import { firebase, updatePassword } from '@react-native-firebase/auth'
import auth from "@react-native-firebase/auth";
import { Loader } from '../loader';
import { icons } from '../../assets';

// import { getAuth, updatePassword } from 'firebase/compat/auth';

const ChangePassword = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [OldPassword, setOldPassword] = useState("")
    const [Password, setPassword] = useState("")
    const [CPassword, setCPassword] = useState("")
    const navigation = useNavigation()
    const [isVisible, setisVisible] = useState(false)



    const reauthenticate = (OldPassword) => {
        const user = firebase.auth().currentUser;
        const cred = firebase.auth.EmailAuthProvider.credential(user.email, OldPassword)
        return user.reauthenticateWithCredential(cred)
    }

    const onchangeHendlar = () => {
        setisVisible(true)
        reauthenticate(OldPassword).then(() => {
            const user = firebase.auth().currentUser;
            user.updatePassword(Password).then((i) => {
                setisVisible(false)
                AsyncStorage.clear();
                Alert.alert(
                    "PostIt App",
                    "Password is Update successfuly",
                    [
                        {
                            text: "OK", onPress: () => navigation.reset({
                                index: 0,
                                routes: [{ name: "Mockup" }],
                            })
                        }
                    ]
                );

            }).catch((error) => {
                setisVisible(false)
                setModalVisible(false)
                Alert.alert(error.message)
                console.log("error", error);
            })
        }).catch((error) => {
            setisVisible(false)
            console.log("error", error);
            setModalVisible(false)
            Alert.alert(error.message)
        });
    }

    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    setModalVisible(true)
                }}
                style={styles.pikContainer}>
                <View style={styles.firstviwecontainer}>
                    <Text style={styles.textcontainer}>Change Password</Text>
                </View>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                style={{ backgroundColor: color.gray }}
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    // Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>

                    <View style={styles.modalView}>
                        <TouchableOpacity style={{ alignSelf: "flex-end" }} onPress={() => setModalVisible(false)}>
                            <Image style={styles.tinyLogo} source={icons.ic_cancel} />
                        </TouchableOpacity>
                        <InputBox
                            autoCapitalize={false}
                            title={"Enter your Old Password"}
                            value={OldPassword}
                            onChangeText={(txt) => {
                                setOldPassword(txt)
                            }}
                        />
                        <InputBox
                            autoCapitalize={false}
                            title={"Enter your new Password"}
                            value={Password}
                            onChangeText={(txt) => {
                                setPassword(txt)
                            }}
                        />
                        <InputBox
                            autoCapitalize={false}
                            title={"Enter your confirm Password"}
                            value={CPassword}
                            onChangeText={(txt) => {
                                setCPassword(txt)
                            }}
                        />
                        <Button
                            title={"Save Password"}
                            onPress={onchangeHendlar}
                        />
                        {/* <TouchableOpacity
                            onPress={() => onchangeHendlar()}
                            style={styles.pikContainer}
                        >
                            <View style={styles.firstviwecontainer}>
                                <Text style={styles.textcontainer}>Save Password</Text>
                            </View>
                        </TouchableOpacity> */}
                    </View>
                </View>
                <Loader isVisible={isVisible} />
            </Modal>

        </View>

    )
}

export default ChangePassword