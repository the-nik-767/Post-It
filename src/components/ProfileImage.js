import React from "react"
import { Image, TouchableOpacity, View } from "react-native"
import { useSelector } from "react-redux"
import { icons } from "../assets"
import { responsiveWidth } from "../constant/theme"


const Profile = (props) => {
    const dataprofile = useSelector((state) => state.user.userData)
    const pic = dataprofile.profilephoto

    return (
        < View >
            <TouchableOpacity>
                <Image
                    source={
                        pic
                            ? { uri: pic }
                            : icons.ic_profile
                    }
                    style={[{
                        height: responsiveWidth("10%"),
                        width: responsiveWidth("10%"),
                        borderRadius: 50
                    }, props.imgss]}
                    resizeMode="contain"
                />
            </TouchableOpacity>
        </View >
    )
}

export default Profile