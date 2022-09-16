import React, { useEffect, useRef, useState } from "react";
import {
    Text,
    View,
    Image,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    TextInput,
} from "react-native";
import ActionSheet from "react-native-actionsheet";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { icons } from "../../assets";
import { Header } from "../../components";
import { color, fontSize, responsiveWidth } from "../../constant/theme";
import { style } from "./styles";
import ImagePicker from 'react-native-image-crop-picker';
import { Loader } from "../../components/loader";
import { useDispatch } from 'react-redux'
import auth from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firestore from "@react-native-firebase/firestore";
import { firebase } from "@react-native-firebase/storage";
import { getUserData } from "../../redux/actions/userAction";
import ChangePassword from "../../components/changePassword/ChangePassword";

const Profile = (props) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [isVisible, setisVisible] = useState(false)


    let actionSheet = useRef();
    const [urll, seturll] = useState(null)
    const [userData, setuserData] = useState({
        firstname: "",
        profilimage: "",
        lastname: "",
        mobile_no: 0,
        email: "",
        id: ""
    })

    useEffect(() => {
        getDataFromAsync()
    }, [])

    const getDataFromAsync = async () => {
        const jsonValue = await AsyncStorage.getItem("USER_DATA");
        const data = jsonValue != null ? JSON.parse(jsonValue) : null;
        setuserData({
            firstname: data.firstname,
            lastname: data.lastname,
            mobile_no: data.mobile_no,
            email: data.email,
            id: data.id,
            profilimage: data.profilephoto
        })
        seturll(data.profilephoto)
    }

    const onPressCamera = async () => {
        // setisVisible(true)
        let options = {
            storageOptions: {
                skipBackup: true,
                path: "images",
                saveToPhotos: true
            },
        };
        await launchCamera(options, (response) => {
            // setisVisible(false)
            if (response.didCancel) {
            } else if (response.error) {
            } else if (response.customButton) {
                alert(response.customButton);
            } else {
                // setisVisible(false)
                ImagePicker.openCropper({
                    path: response?.assets[0]?.uri,
                    width: 300,
                    height: 400
                }).then(image => {
                    seturll(image.path);
                    // setisVisible(false)
                });
            }
        });
    }

    const onPressGallery = async () => {
        // setisVisible(true)
        let options = {
            storageOptions: {
                skipBackup: true,
                path: "images",
                saveToPhotos: true
            },
        };
        await launchImageLibrary(options, (response) => {
            // setisVisible(false)
            if (response.didCancel) {
            } else if (response.error) {
            } else if (response.customButton) {
                alert(response.customButton);
            } else {
                ImagePicker.openCropper({
                    path: response?.assets[0]?.uri,
                    width: 300,
                    height: 400
                }).then(image => {
                    seturll(image.path);
                    // setisVisible(false)
                });
            }
        });
    }

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

    const updateUserData = (url) => {
        const id = userData.id
        setisVisible(true)
        firestore()
            .collection("user")
            .doc(id)
            .update({
                firstname: userData.firstname,
                lastname: userData.lastname,
                mobile_no: userData.mobile_no,
                email: userData.email,
                profilephoto: url,
            })
            .then((p) => {
                setisVisible(false)
                dispatch(getUserData(id))
                    .then((res) => {
                        console.log("::respons", res);
                    })
                    .catch((error) => {
                        console.log("::errors", error);
                    });
                console.log("pp", p)
            }).catch((e) => {
                setisVisible(false)
                console.log("e", e)
            })
    }

    const onPressUpdate = () => {
        setisVisible(true)
        if (userData?.profilimage !== urll) {
            firebase
                .storage()
                .ref(userData?.email)
                .putFile(urll)
                .then((snapshot) => {
                    let imageRef = firebase.storage().ref("/" + userData?.email);
                    imageRef
                        .getDownloadURL()
                        .then((url) => {
                            seturll(url)
                            updateUserData(url)
                        })
                        .catch((e) => {
                            console.log("getting downloadURL of image error => ", e)
                            // updateUserData(urll)
                        });
                })
                .catch((e) => {
                    // updateUserData(urll)
                    console.log("uploading image error => ", e);
                    setisVisible(false)
                });
        } else {
            updateUserData(userData?.profilimage)
        }

    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: color.white,
            }}
        >
            <SafeAreaView>
                <Header
                    showBack={true}
                    title={"Profile"}
                    arrowStyle={{ tintColor: color.black }}
                    rightContainer={
                        <TouchableOpacity
                            onPress={() => {
                                onPressUpdate()
                            }}
                        >
                            <Text style={{ color: color.black }}>
                                Save
                            </Text>
                        </TouchableOpacity>
                    }
                />
            </SafeAreaView>
            <ScrollView>
                <View style={style.profileviwecontainer}>
                    <Image
                        resizeMode="contain"
                        style={style.profilePicContainer}
                        source={
                            urll
                                ? { uri: urll }
                                : icons.ic_profile
                        }
                    />
                    <TouchableOpacity
                        style={style.addContainer}
                        onPress={() => actionSheet.current.show()}
                    >
                        <Image style={style.tinyLogoplus} source={icons.ic_plus} />
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
                    </TouchableOpacity>
                </View>
                <Text style={style.infocontainer}>Account Info</Text>
                <View style={style.pikContainer}>
                    <View style={style.firstviwecontainer}>
                        <Text style={style.textcontainer}>Firstname</Text>
                        <TextInput
                            autoCorrect={false}
                            placeholder="Firstname"
                            value={userData.firstname}
                            style={style.detelcontainer}
                            onChangeText={(txt) => {
                                setuserData({
                                    ...userData,
                                    firstname: txt,
                                })
                            }}
                        />
                    </View>
                </View>
                <View style={style.pikContainer}>
                    <View style={style.firstviwecontainer}>
                        <Text style={style.textcontainer}>Lastname</Text>
                        <TextInput
                            autoCorrect={false}
                            placeholder="Lastname"
                            value={userData?.lastname}
                            style={style.detelcontainer}
                            onChangeText={(txt) => {
                                setuserData({
                                    ...userData,
                                    lastname: txt,
                                })
                            }}
                        />
                    </View>
                </View>
                <View style={style.pikContainer}>
                    <View style={style.firstviwecontainer}>
                        <Text style={style.textcontainer}>PhoneNo</Text>
                        <TextInput
                            autoCorrect={false}
                            placeholder="PhoneNo"
                            value={userData?.mobile_no}
                            style={style.detelcontainer}
                            onChangeText={(txt) => {
                                setuserData({
                                    ...userData,
                                    mobile_no: txt,
                                })
                            }}
                        />
                    </View>
                </View>
                {/* <View style={style.pikContainer}>
                    <View style={style.firstviwecontainer}>
                        <Text style={style.textcontainer}>Email</Text>
                        <TextInput
                            autoCorrect={false}
                            placeholder="Email"
                            value={userData?.email}
                            style={style.detelcontainer}
                            onChangeText={(txt) => {
                                setuserData({
                                    ...userData,
                                    email: txt,
                                })
                            }}
                        />
                        <Text style={style.detelcontainer}>{userData?.email}</Text>
                    </View>
                </View> */}

                <TouchableOpacity style={style.pikContainer}>
                    <View style={{ flex: 1, justifyContent: "center" }}>
                        <Text style={style.textcontainer}>Email</Text>
                    </View>
                    <View style={style.firstviwecontainer}>
                        <View>
                            <Text style={style.detelcontainer}>{userData?.email}</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <ChangePassword />

                <View style={{ height: responsiveWidth("30%") }} />
            </ScrollView>
            <Loader isVisible={isVisible} />
        </View>
    );
}


export default Profile 