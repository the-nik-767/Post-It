import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, Image, View, } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { Button, InputBox } from "../../components";
import { Loader } from "../../components/loader";
import { responsiveWidth } from "../../constant/theme";
import { styles } from "./styles";
import auth from "@react-native-firebase/auth";
import { getUserData } from "../../redux/actions/userAction";
import { icons } from "../../assets";

const emailReg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Mockup = () => {
    const navigation = useNavigation()
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const dispatch = useDispatch()
    const [isVisible, setisVisible] = useState(false)


    const onPressLogin = () => {
        if (Email.length === 0) {
            Alert.alert("please enter your email");
        } else if (!Email.match(emailReg)) {
            Alert.alert("Please enter valid email");
        } else if (Password.length < 6) {
            Alert.alert("Please enter a valid password");
        } else {
            setisVisible(true)
            auth()
                .signInWithEmailAndPassword(Email, Password)
                .then(async (firebaseUser) => {
                    setisVisible(false)
                    console.log("id ::", firebaseUser);
                    const id = firebaseUser.user.uid;
                    dispatch(getUserData(id))
                        .then((res) => {
                            setisVisible(false)
                            console.log("::respons", res);
                            if (res !== null) {
                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: "Home" }],
                                });
                            }
                        })
                        .catch((error) => {
                            setisVisible(false)
                            console.log("::errors", error);
                        });
                })
                .catch((error) => {
                    console.log("login error==>", error.code);
                    setisVisible(false)
                    // Error Handling
                    if (error.code === "auth/invalid-email") {
                        alert("Please Enter Valid Email");
                    } else if (error.codfe === "auth/user-disabled") {
                        alert("this user is disabled! Please contact cutomer service.");
                    } else if (error.code === "auth/user-not-found") {
                        alert("No user found with corresponding email.");
                    } else if (error.code === "auth/wrong-password") {
                        alert("Incorrect Password! Please Try Again");
                    } else {
                        alert("Something went wrong! please check network connection");
                        setisVisible(false)
                    }
                });
        }
    };


    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.container}>
                <View style={styles.subContainer}>
                    <View style={styles.maintop}>
                        <Image style={[styles.SplashScreenPicContainer, { top: responsiveWidth("23%"), left: responsiveWidth("11%") }]} source={icons.ic_logoSplah} />
                        <Image style={[styles.SplashScreenPicContainer, { bottom: responsiveWidth("7%"), right: responsiveWidth("3%") }]} source={icons.ic_logoSplahName} />
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={{ flex: 1 }}></View>
                    <InputBox
                        autoCapitalize={false}
                        title={"Enter your email"}
                        value={Email}
                        onChangeText={(txt) => {
                            setEmail(txt)
                        }}
                    />
                    <InputBox
                        title="Enter your Password"
                        secureTextEntry={true}
                        showEyeIcon={true}
                        value={Password}
                        onChangeText={(txt) => {
                            setPassword(txt)
                        }}
                    />
                    <Button
                        title={"Login"}
                        onPress={onPressLogin}
                        buttonContainer={{ marginVertical: responsiveWidth("5%") }}
                    />
                </View>
            </ScrollView>
            <Loader isVisible={isVisible} />
        </View>
    )
}


export default Mockup;
