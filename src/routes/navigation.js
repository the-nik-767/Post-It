import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../screen/Login";
import Mockup from "../screen/Mockup";
import Home from "../screen/Home";
import { color, responsiveHeight, responsiveWidth } from "../constant/theme";
import { icons } from "../assets";
import { Image, StyleSheet, View } from "react-native";
import Profile from "../screen/Profile";
import splashScreen from "../screen/splashScreen";
import Settings from "../screen/Settings";

const Stack = createNativeStackNavigator();

function MainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="SplashScreen" component={splashScreen} />
                <Stack.Screen name="Mockup" component={Mockup} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Home" component={MyTabs} />
                <Stack.Screen name="Settings" component={Settings} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    bottom: 20,
                    left: responsiveWidth("7%"),
                    right: responsiveWidth("7%"),
                    position: "absolute",
                    borderRadius: 15,
                    backgroundColor: color.white,
                    height: responsiveWidth("17.5%"),
                    ...style.shadow,
                    // borderWidth:1,
                    borderColor: "gray",
                    paddingBottom: 0,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image
                                source={icons.ic_home}
                                resizeMode="contain"
                                style={{
                                    height: responsiveHeight("6.5%"),
                                    width: responsiveWidth("6.5%"),
                                    tintColor: focused ? color.green : color.gray,
                                }}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image
                                source={icons.ic_user}
                                resizeMode="contain"
                                style={{
                                    height: responsiveHeight("6.5%"),
                                    width: responsiveWidth("6.5%"),
                                    tintColor: focused ? color.green : color.gray,
                                }}
                            />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const style = StyleSheet.create({
    shadow: {
        shadowColor: color.black,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5,
    },
});

export default MainNavigator;
