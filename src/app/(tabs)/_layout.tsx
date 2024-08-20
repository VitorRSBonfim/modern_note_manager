import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native";
import { SimpleLineIcons, MaterialIcons, AntDesign, MaterialCommunityIcons, Ionicons} from "@expo/vector-icons";

export default function Layout(){
    return (
        
        <Tabs screenOptions={{headerShown: false, tabBarActiveTintColor: "black"}}>
            
            <Tabs.Screen name="index"  options={{ tabBarShowLabel: false,tabBarLabel: "home", tabBarIcon: ({color, size}) => (<Ionicons name="home-outline" size={size} color={color}/>)}} />
            <Tabs.Screen name="addNote"  options={{ tabBarShowLabel: false, tabBarIcon: ({color, size}) => (<AntDesign name="plus" size={size} color={color}/>)}} />
            <Tabs.Screen name="userProfile"  options={{ tabBarShowLabel: false,tabBarIcon: ({color, size}) => (<Ionicons name="person-circle-sharp" size={size} color={color}/>) }} />
        </Tabs>
    )
}
