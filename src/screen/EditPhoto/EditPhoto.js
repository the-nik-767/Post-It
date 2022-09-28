import { useRoute } from '@react-navigation/native'
import React, { useCallback, useEffect, useRef, useState, } from 'react'
import { ScrollView, Text, View, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native'
import { icons } from '../../assets'
import { Header } from '../../components'
import BottomBtn from '../../components/BottomBtn'
import BtnShare from '../../components/BtnShare'
import FontSizeHandler from '../../components/FontSizeHandler'
import FontSizeSlider from '../../components/FontSizeSlider'
import HandleBtn from '../../components/HandleBtn'
import Menupopover from '../../components/MenuPopover'
import Profile from '../../components/ProfileImage'
import TriangleColorPickerpopover from '../../components/TriangleColorPicker'
import ViewShotSS from '../../components/ViewShot'
import { color, fontSize, responsiveWidth } from '../../constant/theme'
import { styles } from './styles'

const EditPhoto = (props) => {
    const route = useRoute()
    const params = route.params.data;
    const img = params.imgURL
    const ref = useRef();
    const [Footer, setFooter] = useState(false);
    const [toggleModal, setToggleModal] = useState(1);
    const [toggleModal2, setToggleModal2] = useState(false);
    const [FooterColor, setFooterColor] = useState("");
    const [FooterColorTxt, setFooterColorTxt] = useState("");
    const [fonttxt, setfonttxt] = useState(false);
    const [footerRemover, setfooterRemover] = useState(false);
    const [fontSizefooter, setfontSizefooter] = useState(fontSize.regular);
    const [footerSizefooter, setfooterSizefooter] = useState("74");
    const [footerSizedreg, setfooterSizedreg] = useState(4);
    const [FooterFontfontFamily, setFooterFontfontFamily] = useState("Roboto-Regular")

    useEffect(() => {
        setFooterColor(color.darkwhite);
        setFooterColorTxt(color.black)
    }, []);

    //setFooterFontfontFamily
    const selecthandle = useCallback((items) => { setFooterFontfontFamily(items.fonst) }, [FooterFontfontFamily])

    //FooterColorhandletxt
    const Colorhandle = useCallback(() => {
        setToggleModal(1)
        // setfonttxt(true)
    }, [toggleModal])

    const FooterColorhandletxt = useCallback((color) => {
        // console.log("dfjughjfdtgtu", color);
        setFooterColorTxt(color)
        setToggleModal(0)
    }, [FooterColorTxt])

    //FooterColorhandler
    const Colorhandle2 = useCallback(() => {
        setToggleModal(2)
        // setBColor(true)
    }, [toggleModal])

    const FooterColorhandler = useCallback((color) => {
        // console.log("dfjughju", color);
        setFooterColor(color)
        setToggleModal(0)
    }, [FooterColor])

    //setfontSizefooterHandler
    const fontSizefooterHandler = useCallback((value) => {
        setfontSizefooter(parseInt(value))
        setToggleModal(0)
    }, [fontSizefooter])

    const FontSizeSliderhandle = useCallback(() => {
        setToggleModal(3)
    }, [toggleModal])

    const FooterSizeSliderhandle = useCallback(() => {
        setToggleModal(4)
    }, [toggleModal])

    const FooterSizefooterHandler = useCallback((value) => {
        setfooterSizefooter(value)
        setfooterSizedreg(parseInt(value - 65))
        setToggleModal(0)
    }, [footerSizefooter])

    const FooterRemoverhandle = () => {
        setfooterRemover(!footerRemover)
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <Header
                showBack={true}
                title={"Edit"}
                rightContainer={<BtnShare viewShotRef={ref} />}
            />
            <ScrollView>
                <ViewShotSS
                    footerSizefooter={footerSizefooter}
                    footerSizedreg={footerSizedreg}
                    viewShotRefss={ref}
                    Footer={Footer}
                    img={img}
                    FooterColor={FooterColor}
                    fontSizefooter={fontSizefooter}
                    FooterColorTxt={FooterColorTxt}
                    footerRemover={footerRemover}
                    FooterFontfontFamily={FooterFontfontFamily}
                />
                <View style={{ flexDirection: "column-reverse", flex: 1 }} >
                    <View style={{ flexDirection: "row", justifyContent: "space-around", marginBottom: responsiveWidth("5%") }}>
                        <Menupopover FooterFontfontFamily={FooterFontfontFamily} selecthandle={selecthandle} />
                        <TouchableOpacity onPress={Colorhandle2} >
                            <Image
                                source={icons.ic_font_palette}
                                style={styles.bottomicon}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={FontSizeSliderhandle}>
                            <Image
                                source={icons.ic_font_typography}
                                style={styles.bottomicon}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={Colorhandle}>
                            <Image
                                source={icons.ic_font_theme}
                                style={styles.bottomicon}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={FooterRemoverhandle}>
                            <Image
                                source={icons.ic_text_remove}
                                style={styles.bottomicon}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.bottomContainer, { height: toggleModal === 0 ? 60 : 160, width: 340 }]}>
                        {toggleModal === 1 ? (
                            <TriangleColorPickerpopover
                                FooterColorhandle={FooterColorhandler}
                                ToggleModalHandler={() => setToggleModal(1)} />
                        ) : toggleModal === 2 ? (
                            <TriangleColorPickerpopover
                                FooterColorhandle={FooterColorhandletxt}
                                ToggleModalHandler={() => setToggleModal(2)} />
                        ) : toggleModal === 3 ? (
                            <FontSizeSlider
                                maximumValue={17}
                                minValue={7}
                                showBack={true}
                                toggleModal1={FontSizeSliderhandle}
                                ToggleModalHandler1={() => setToggleModal(3)}
                                fontSizefooterHandler={fontSizefooterHandler} />
                        ) : toggleModal === 4 ? (
                            <FontSizeSlider
                                maximumValue={90}
                                minValue={74}
                                showBack={false}
                                toggleModal1={FooterSizeSliderhandle}
                                ToggleModalHandler1={() => setToggleModal(0)}
                                fontSizefooterHandler={FooterSizefooterHandler} />
                        ) : null}
                    </View>

                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default EditPhoto