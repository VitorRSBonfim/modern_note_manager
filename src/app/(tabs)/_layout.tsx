import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native";
import { SimpleLineIcons, MaterialIcons, AntDesign, MaterialCommunityIcons, Ionicons} from "@expo/vector-icons";

export default function Layout(){
    return (
  
            <Tabs screenOptions={{headerShown: false, tabBarActiveTintColor: "black"}}>
            
                <Tabs.Screen name="index"  options={{ tabBarShowLabel: false,tabBarLabel: "home", tabBarActiveTintColor: "#7A4ED9", tabBarIcon: ({color, size}) => (<Ionicons name="home-outline" size={size} color={color}/>)}} />
                <Tabs.Screen name="addNote"  options={{ tabBarShowLabel: false,  tabBarActiveTintColor: "#7A4ED9", tabBarIcon: ({color, size}) => (<AntDesign name="plus" size={size} color={color}/>)}} />
                <Tabs.Screen name="recentDeleted" options={{tabBarShowLabel: false, tabBarActiveTintColor: "#7A4ED9", tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="delete-clock-outline" size={size} color={color} />)}} />
                <Tabs.Screen name="userProfile"  options={{ tabBarShowLabel: false, tabBarActiveTintColor: "#7A4ED9", tabBarIcon: ({color, size}) => (<Ionicons name="person-circle-sharp" size={size} color={color}/>) }} />
            </Tabs>
        
    )
}
