import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity, FlatList, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { color, responsiveWidth } from "../../constant/theme";
import Profile from "../../components/ProfileImage";
import { Header } from "../../components";
import { styles } from "./styles";
import PostList from "../../components/PostList";
import firestore from "@react-native-firebase/firestore";
import { Loader } from "../../components/loader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { icons } from "../../assets";


const Home = (props) => {
    const navigation = useNavigation();
    const [CatagoryItem, setCatagoryItem] = useState(0)
    const [Menuitem, setMenuitem] = useState([])
    const [Today, setToday] = useState([])
    const [Festival, setFestival] = useState([])
    const [Birthday, setBirthday] = useState([])
    const [isVisible, setisVisible] = useState(false)
    const [userid, setuserid] = useState()

    useEffect(() => {
        getCategoryList()
        getlistphoto()
        getDataFromAsync()
    }, [userid])

    const getDataFromAsync = async () => {
        const jsonValue = await AsyncStorage.getItem("USER_DATA");
        const data = jsonValue != null ? JSON.parse(jsonValue) : null;
        setuserid(data.id)
    }

    const getlistphoto = () => {
        setisVisible(true)
        firestore()
            .collection("postList")
            .get()
            .then(async (documentSnapshot) => {
                const listdata = []
                let tempdata = documentSnapshot.forEach((documentSnapshot) => {
                    const searching = documentSnapshot.data();

                    // console.log("searchingsearching", searching.whoseen);
                    searching?.whoseen?.filter((i) => {
                        // console.log("sugar id", i)
                        if (i == userid) {
                            // console.log("i", i);
                            listdata.push(searching)
                        }
                    })
                    // console.log("searching", searching.whoseen.filter((filter) => {
                    //     console.log("filter", filter);
                    // }));

                    // console.log("searching------", searching);
                })
                let Today = listdata.filter((p) => {
                    return p.Catagory == "Today";
                });

                let Festival = listdata.filter((i) => {
                    return i.Catagory == "Festival";
                });

                let Birthday = listdata.filter((z) => {
                    return z.Catagory == "Birthday";
                });
                setToday(Today)
                setFestival(Festival)
                setBirthday(Birthday)
                setisVisible(false)
            })
            .catch((e) => {
                console.log("e", e);
                setisVisible(false)
            });
    }

    const getCategoryList = useCallback(() => {
        setisVisible(true)
        firestore()
            .collection("categorylist")
            .get()
            .then(async (documentSnapshot) => {
                setisVisible(false)
                const listdata = []
                let tempdata = documentSnapshot.forEach((documentSnapshot) => {
                    const searching = documentSnapshot.data();
                    listdata.push(searching)
                })
                setMenuitem(listdata)
            })
            .catch((e) => {
                setisVisible(false)
                console.log("e", e);
            });
    }, [Menuitem])

    const renderItem = (item) => {
        return (<PostList data={item} imgURL={item?.imgURL} id={item?.id} />)
    }

    const CatagoryItemHendler = useCallback((index) => {
        setisVisible(true)
        setCatagoryItem(index)
        setTimeout(() => {
            setisVisible(false)
        }, 200)
    }, [])

    const Catagory = () => (
        <View style={{ flexDirection: "row", borderTopWidth: 0.5, backgroundColor: color.darkwhite }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {Menuitem?.map((i, index) => {
                    return (
                        <TouchableOpacity
                            onPress={() => CatagoryItemHendler(index)}
                            activeOpacity={1}
                            key={index.toString()}
                            style={styles.CatagoryContainer}
                        >
                            <Image source={{ uri: i.photo }} style={{ height: 40, width: 40 }} resizeMode="stretch" />
                            <Text style={styles.CatagoryContainertxt} >
                                {i.categoryname}
                            </Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </View>
    )

    const CatagoryComponentdata = useMemo(() => Catagory(Menuitem), [Menuitem]);

    const ListHeaderComponent = () => {
        return (
            <View style={{ backgroundColor: color.darkwhite }}>
                <Header
                    leftContainer={<Text style={styles.textcontainer}>Home</Text>}
                    rightContainer={<Profile />}
                />
                {CatagoryComponentdata}
            </View>
        )
    }

    const ListHeaderComponentdata = useMemo(() => ListHeaderComponent(Menuitem), [Menuitem]);

    const ListEmptyComponent = () => {
        return (
            <View style={styles.EmptyContainer}>
                <Image
                    resizeMode="contain"
                    source={icons.ic_box}
                    style={styles.boximage}
                />
                <Text style={styles.NoText}>No photos found</Text>
            </View>
        )
    }

    return (
        <View style={styles.sectionContainer}>
            <FlatList
                data={CatagoryItem == 0 ? Today : CatagoryItem == 1 ? Festival : Birthday}
                contentContainerStyle={styles.FlatListContainer}
                showsVerticalScrollIndicator={false}
                renderItem={(item) => renderItem(item.item)}
                stickyHeaderIndices={[0]}
                stickyHeaderHiddenOnScroll={true}
                ListHeaderComponent={ListHeaderComponentdata}
                ListEmptyComponent={ListEmptyComponent}
            />
            <Loader isVisible={isVisible} />
        </View>
    )
}


export default Home 