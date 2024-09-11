import { View, Text, FlatList, Pressable} from "react-native"
import { StatusBar, StyleSheet } from "react-native"
import { Header } from "./components/header";
import { useState, useEffect } from "react";
import { Filter } from "./components/filter";
import { Filters } from "./components/filters";
import { FilterProps } from "./components/filters/filters.t";
import { AllNotes } from "@/src/database/staticData/recents/recentsData";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { Components } from "./components/getByFilter/getByFilter";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { usePathname } from "expo-router";

const data = [
    {id: 1, noteName: "note01", section: "all"},
    {id: 2, noteName: "note02", section: "sectionMy"},
    {id: 3, noteName: "note03", section: "all"},
    {id: 4, noteName: "note04", section: "sectionMy"},
    {id: 5, noteName: "note05", section: "all"},
    {id: 6, noteName: "note06", section: "sectionMy"},
    {id: 7, noteName: "note07", section: "all"},
    {id: 8, noteName: "note08", section: "sectionMy"},
    {id: 9, noteName: "note09", section: "all"},
    {id: 10, noteName: "note10", section: "sectionMy"},
    {id: 11, noteName: "note11", section: "all"}
];

/* Getting the currenty date */


const dd = [
	{id: 1, name: "Jhon Doe"},
	{id: 2, name: "Viktor Rob"},
	{id: 3, name: "Mordekaiser"}
]



const date = new Date();

const currentyDate = date.getDate()  + "/" + date.getDay() + "/" + date.getFullYear()



type GetSecProps = {
    filter: String
}



export default function HomeScreen() {
    
    
    return (
        <SafeAreaView style={{ height: "100%"}}> 
            <Components/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    default: {
        backgroundColor: "blue"
    },
    selected: {
        backgroundColor: "red"
    },
    btn: {
        backgroundColor: "red"
    },
    btnText: {
        color: "white"
    }
    
})
