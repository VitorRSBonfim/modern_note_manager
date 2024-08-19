import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native";
import { SimpleLineIcons, MaterialIcons } from "@expo/vector-icons";

export default function Layout(){
    return (
        <Tabs screenOptions={{headerShown: false}}>
            <Tabs.Screen name="index"  options={{ tabBarShowLabel: false, tabBarIcon: () => <SimpleLineIcons name="home" size={26} /> }} />
            <Tabs.Screen name="addNote"  options={{ tabBarShowLabel: false, tabBarIcon: () => <SimpleLineIcons name="pencil" size={23} /> }} />
            <Tabs.Screen name="userProfile"  options={{ tabBarShowLabel: false, tabBarIcon: () => <MaterialIcons name="person" size={26} /> }} />
        </Tabs>
    )
}
