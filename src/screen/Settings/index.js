import React, { useEffect, useRef, useState } from "react";
import {
    Text,
    View,
    Image,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { icons } from "../../assets";
import { Header } from "../../components";
import { color, fontSize, responsiveWidth } from "../../constant/theme";
import { style } from "./styles";
import { Loader } from "../../components/loader";
import { useDispatch } from 'react-redux'
import auth from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Settings = (props) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [isVisible, setisVisible] = useState(false)

    const signOutUser = (r) => {
        setisVisible(true)
        auth()
            .signOut()
            .then(async (g) => {
                setisVisible(false)
                console.log("logout succses ", g);
                await AsyncStorage.clear();
                navigation.reset({
                    index: 0,
                    routes: [{ name: "Mockup" }],
                });
            })
            .catch((res) => {
                setisVisible(false)
                console.log("res error", res);
            });
    };


    return (
        <View style={{ flex: 1, backgroundColor: color.white, }}  >
            <SafeAreaView>
                <Header
                    title={"Profile"}
                    arrowStyle={{ tintColor: color.black }}
                />
            </SafeAreaView>
            <ScrollView>
                <Text style={style.infocontainer}>App Info</Text>
                <TouchableOpacity
                    style={style.pikContainer}
                    onPress={() => {
                        navigation.navigate("Profile");
                    }}
                >
                    <View style={{ flex: 1, justifyContent: "center" }}>
                        <Image style={style.aboutLogo} source={icons.ic_edit} />
                    </View>
                    <View style={{ flex: 4, justifyContent: "center" }}>
                        <Text style={style.textcontainer}>Edit Profile</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={style.pikContainer}
                    onPress={() => {
                        // this.props.navigation.navigate("AboutUs");
                    }}
                >
                    <View style={{ flex: 1, justifyContent: "center" }}>
                        <Image style={style.aboutLogo} source={icons.ic_about} />
                    </View>
                    <View style={{ flex: 4, justifyContent: "center" }}>
                        <Text style={style.textcontainer}>About Us</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        signOutUser()
                    }}
                    style={[style.pikContainer, { marginTop: responsiveWidth("9%") }]}
                >
                    <View style={{ flex: 1, justifyContent: "center" }}>
                        <Image style={style.tinyLogo} source={icons.ic_logout} />
                    </View>
                    <View style={{ flex: 4, justifyContent: "center" }}>
                        <Text style={style.textcontainer}>Logout</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ height: responsiveWidth("30%") }} />
            </ScrollView>
            <Loader isVisible={isVisible} />
        </View>
    );
}


export default Settings 