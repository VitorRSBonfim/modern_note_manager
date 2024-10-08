import {Stack, Tabs } from "expo-router";
import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SimpleLineIcons, MaterialIcons, AntDesign, MaterialCommunityIcons, Ionicons, FontAwesome} from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { SQLiteProvider } from "expo-sqlite";
import { Slot, usePathname } from "expo-router";
import { useEffect } from "react";
import { KeyboardAvoidingView } from "react-native";

export function useTabEffect(route: string, effect: () => void) {
    const path = usePathname();
    useEffect(() => {
        if (path === route) {
            effect();
        }
    }, [path])
}
export default function Layout(){
    return (
   
        <SafeAreaProvider style={{ flex: 1 }}>
            <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: "black", tabBarHideOnKeyboard: true }}>
                <Tabs.Screen name="index" options={{ tabBarShowLabel: false, tabBarLabel: "home", tabBarActiveTintColor: "#7A4ED9", tabBarIcon: ({ color, size }) => (<Ionicons name="home-outline" size={size} color={color} />) }} />

                <Tabs.Screen name="newNote" options={{ tabBarShowLabel: false, tabBarActiveTintColor: "#7A4ED9", tabBarIcon: ({ color, size }) => (<FontAwesome name="pencil-square-o" size={size} color={color} />) }} />
            </Tabs>
        </SafeAreaProvider>
          
    )
}
