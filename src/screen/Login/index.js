import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View, Alert, Image, TouchableOpacity, ScrollView } from "react-native";
import { icons } from "../../assets";
import { Button, Header, InputBox } from "../../components";
import { color, fontSize, responsiveWidth } from "../../constant/theme";
import auth from "@react-native-firebase/auth";
import { useDispatch } from 'react-redux'
import { styles } from "./styles";
import { getUserData } from "../../redux/actions/userAction";
import { Loader } from "../../components/loader";

const emailReg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Login = () => {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [isVisible, setisVisible] = useState(false)


    const onPressLogin = () => {
        if (Email.length === 0) {
            Alert.alert("please enter your email");
        } else if (!Email.match(emailReg)) {
            Alert.alert("Please enter valid email");
        } else if (Password.length < 6) {
            Alert.alert("Please enter a valid password");
        } else if (showPassword === false) {
            Alert.alert("Please Agree Terms & conditions");
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
                        alert("Something went wrong! please try again");
                        setisVisible(false)
                    }
                });
        }
    };


    return (
        <View style={styles.container} >
            <Header showBack={true} />
            <ScrollView style={styles.sectionContainer}>
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
                <TouchableOpacity style={{ margin: responsiveWidth("5%"), flexDirection: "row" }}
                    onPress={() => {
                        setShowPassword(!showPassword);
                    }}>
                    <TouchableOpacity
                        onPress={() => {
                            setShowPassword(!showPassword);
                        }}
                    >
                        <Image
                            style={{
                                height: 20,
                                width: 20,
                                marginHorizontal: responsiveWidth(2)
                            }}
                            source={!showPassword ? icons.ic_unchak : icons.ic_chak}
                        />
                    </TouchableOpacity>
                    <Text style={{ color: color.black, fontSize: fontSize.mini }}>Agree to Terms & Conditions</Text>
                </TouchableOpacity>
                <Button
                    title={"Login"}
                    onPress={onPressLogin}
                />
            </ScrollView>
            <Loader isStyle={true} isVisible={isVisible} />
        </View>
    )
}


export default Login