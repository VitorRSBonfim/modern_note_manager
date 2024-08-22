import { View, Text, FlatList, Pressable} from "react-native"
import { SafeAreaView, StatusBar, StyleSheet } from "react-native"
import { Header } from "@/src/app/(tabs)/components/header"
import { useState, useEffect } from "react";
import { Filter } from "./components/filter";
import { Filters } from "./components/filters";
import { FILTERS } from "@/src/database/staticData/filter/filterData";
import { FilterProps } from "./components/filters/filters.t";
import { AllNotes } from "@/src/database/staticData/recents/recentsData";

import { RecentsNotes } from "./components/recent/recents";
import { expNewObjectData } from "./components/recent/recents";

import { OlderNotes } from "./components/oldersNotes/older";

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

for ( let c = 0; c < dd.length; c++ ) {
    console.log(dd[c].name)
}


const date = new Date();

const currentyDate = date.getDate()  + "/" + date.getDay() + "/" + date.getFullYear()

console.log(currentyDate)


export default function HomeScreen() {
    
    const [filter, setFilter] = useState(FILTERS[0])
    

    return (
        
        <View>
            <StatusBar barStyle={"dark-content"} translucent={true} backgroundColor="transparent" />
            <Header/>
            <Filters filters={FILTERS} filter={filter} onChange={setFilter} />
            <RecentsNotes/>
            <OlderNotes/>
        </View>
    
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
