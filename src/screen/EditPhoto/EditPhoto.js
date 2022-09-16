import { useRoute } from '@react-navigation/native'
import React, { useCallback, useEffect, useRef, useState, } from 'react'
import { ScrollView, Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import ActionSheet from 'react-native-actionsheet'
import { Header } from '../../components'
import BottomBtn from '../../components/BottomBtn'
import FontSizeHandler from '../../components/FontSizeHandler'
import HandleBtn from '../../components/HandleBtn'
import Menupopover from '../../components/MenuPopover'
import TriangleColorPickerpopover from '../../components/TriangleColorPicker'
import ViewShotSS from '../../components/ViewShot'
import { color, fontSize, responsiveWidth } from '../../constant/theme'
import { styles } from './styles'

const EditPhoto = (props) => {
    const route = useRoute()
    const params = route.params.data;
    // console.log("bghgghggbgvhgvghv", cc);
    const img = params.imgURL
    const ref = useRef();
    let actionShee2 = useRef();
    const [FooterEdit, setFooterEdit] = useState(false);
    const [EditPhoto, setEditPhoto] = useState(false);
    const [Footer, setFooter] = useState(false);
    const [toggleModal, setToggleModal] = useState(false);
    const [toggleModal3, setToggleModal3] = useState(false);
    const [toggleModal2, setToggleModal2] = useState(false);
    const [FooterColor, setFooterColor] = useState("");
    const [FooterColorTxt, setFooterColorTxt] = useState("");
    const [fonttxt, setfonttxt] = useState(false);
    const [BColor, setBColor] = useState(false);
    const [fontSizefooter, setfontSizefooter] = useState(fontSize.regular);
    const [FooterFontfontFamily, setFooterFontfontFamily] = useState("Roboto-Regular")
    const [PhotoFontfontFamily, setPhotoFontfontFamily] = useState("Roboto-Regular")
    const [photoText, setphotoText] = useState(false);
    const [phototxtshow, setphototxtshow] = useState(false)
    const [PartyIconshow, setPartyIconshow] = useState(false)
    const [PhotoColorTxt, setPhotoColorTxt] = useState(color.white);
    const [fontSizephoto, setfontSizephoto] = useState(fontSize.regular);



    useEffect(() => {
        setFooterColor(color.darkwhite);
        setFooterColorTxt(color.black)
    }, []);

    //setFooterFontfontFamily
    const selecthandle = useCallback((items) => { setFooterFontfontFamily(items.fonst) }, [FooterFontfontFamily])

    //FooterColorhandletxt
    const Colorhandle = useCallback(() => {
        setToggleModal(true)
        setfonttxt(true)
    }, [toggleModal])

    const FooterColorhandletxt = useCallback((color) => {
        setFooterColorTxt(color)
        setToggleModal(false)
    }, [FooterColorTxt])

    //FooterColorhandler
    const Colorhandle2 = useCallback(() => {
        setToggleModal2(true)
        setBColor(true)
    }, [toggleModal2])

    const FooterColorhandler = useCallback((color) => {
        setFooterColor(color)
        setToggleModal2(false)
    }, [FooterColor])

    //setfontSizefooterHandler
    const fontSizefooterHandler = useCallback((value) => { setfontSizefooter(parseInt(value)) }, [fontSizefooter])

    // photoFontfontFamily
    const selecthandle1 = useCallback((items) => { setPhotoFontfontFamily(items.fonst) }, [PhotoFontfontFamily])

    const Colorhandle3 = useCallback(() => {
        setToggleModal3(true)
        setphotoText(true)
    }, [toggleModal3])

    const PhotoColorhandletxt = useCallback((color) => {
        setPhotoColorTxt(color)
        setToggleModal3(false)
    }, [PhotoColorTxt])

    const fontSizephotoHandler = useCallback((value) => { setfontSizephoto(parseInt(value)) }, [fontSizephoto])

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
            <Header showBack={true} title={"Edit"} />
            <ViewShotSS
                PartyIconshow={PartyIconshow}
                viewShotRefss={ref}
                Footer={Footer}
                img={img}
                setphototxtshow={setphototxtshow}
                phototxtshow={phototxtshow}
                FooterColor={FooterColor}
                fontSizephoto={fontSizephoto}
                PhotoFontfontFamily={PhotoFontfontFamily}
                fontSizefooter={fontSizefooter}
                FooterColorTxt={FooterColorTxt}
                FooterFontfontFamily={FooterFontfontFamily}
                PhotoColorTxt={PhotoColorTxt}
            />
            <ScrollView>
                {FooterEdit === true ?
                    <View style={styles.bottomContainer}>
                        <Menupopover FooterFontfontFamily={FooterFontfontFamily} selecthandle={selecthandle} />
                        <FontSizeHandler maximumValue={14} fontSizefooterHandler={fontSizefooterHandler} />
                        <TouchableOpacity onPress={Colorhandle} style={[styles.ColorContainer, { marginVertical: responsiveWidth("2%"), }]}>
                            {fonttxt != true && (
                                <Text style={{ color: color.black }}>Font Color</Text>
                            )}
                            {fonttxt === true && (
                                <View style={[styles.colorTxtbtn, { backgroundColor: fonttxt === true ? FooterColorTxt : color.white, width: fonttxt != true ? 0 : responsiveWidth("20%") }]} />
                            )}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={Colorhandle2} style={[styles.ColorContainer, { marginVertical: responsiveWidth("2%"), }]}>
                            {BColor != true && (
                                <Text style={{ color: color.black, }}>Background Color</Text>
                            )}
                            {BColor === true && (
                                <View style={[styles.colorTxtbtn, { backgroundColor: BColor === true ? FooterColor : color.white, width: BColor != true ? 0 : responsiveWidth("20%"), }]} />
                            )}
                        </TouchableOpacity>
                        <HandleBtn HandleBtnstyle={{ marginHorizontal: responsiveWidth("25%") }} showhandler={Footer} Footerhandle={() => setFooter(!Footer)} addTitle={"Footer Add"} removeTitle={"Footer Remove"} />
                    </View>
                    : EditPhoto === true ?
                        <View style={styles.bottomContainer}>
                            <Menupopover FooterFontfontFamily={PhotoFontfontFamily} selecthandle={selecthandle1} />
                            <FontSizeHandler maximumValue={36} fontSizefooterHandler={fontSizephotoHandler} />
                            <TouchableOpacity onPress={Colorhandle3} style={[styles.ColorContainer, { marginVertical: responsiveWidth("2%"), }]}>
                                {photoText != true && (
                                    <Text style={{ color: color.black }}>Font Color</Text>
                                )}
                                {photoText === true && (
                                    <View style={[styles.colorTxtbtn, { backgroundColor: photoText === true ? PhotoColorTxt : color.white, width: photoText != true ? 0 : responsiveWidth("20%") }]} />
                                )}
                            </TouchableOpacity>
                            <HandleBtn showhandler={PartyIconshow} Footerhandle={() => setPartyIconshow(!PartyIconshow)} addTitle={"Add party icon"} removeTitle={"Remove party icon"} />
                            <HandleBtn HandleBtnstyle={{ marginHorizontal: responsiveWidth("25%") }} showhandler={phototxtshow} Footerhandle={() => setphototxtshow(!phototxtshow)} addTitle={"Add Text"} removeTitle={"Remove Text"} />
                        </View>
                        : null}
                <BottomBtn showActionSheetEdit={() => { actionShee2.current.show() }} viewShotRef={ref} />
                <ActionSheet
                    ref={actionShee2}
                    options={["Edit footer", "Edit Photo", "Cancel"]}
                    cancelButtonIndex={2}
                    destructiveButtonIndex={2}
                    onPress={(index) => {
                        if (index == 0) {
                            setFooterEdit(true)
                            setEditPhoto(false)
                        } else if (index == 1) {
                            setEditPhoto(true)
                            setFooterEdit(false)
                        } else {
                            console.log("error");
                        }
                    }} />
                <TriangleColorPickerpopover toggleModal={toggleModal} FooterColorhandle={FooterColorhandletxt} ToggleModalHandler={() => setToggleModal(false)} />
                <TriangleColorPickerpopover toggleModal={toggleModal2} FooterColorhandle={FooterColorhandler} ToggleModalHandler={() => setToggleModal2(false)} />
                <TriangleColorPickerpopover toggleModal={toggleModal3} FooterColorhandle={PhotoColorhandletxt} ToggleModalHandler={() => setToggleModal3(false)} />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default EditPhoto