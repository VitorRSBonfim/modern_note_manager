import { View, Text, FlatList, Pressable} from "react-native"
import { SafeAreaView, StatusBar, StyleSheet } from "react-native"
import { Header } from "@/src/app/(tabs)/components/header"
import { useState } from "react";
import { Filter } from "./components/filter";
import { Filters } from "./components/filters";

import { FilterProps } from "./components/filters/filters.t";

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

export const FILTERS = [
    "all",
    "section01"
]


console.log(data[0].noteName)

for ( var c = 0; c < data.length; c++ ) {
    if (data[c].section == "all") {
        console.log(data[c].section)
    }
    console.log(data[c].noteName)
}


export default function HomeScreen() {
    
    const [filter, setFilter] = useState(FILTERS[0])

    return (
        
        <View>
            <StatusBar barStyle={"dark-content"} translucent={true} backgroundColor="transparent" />
            <Header/>
            <Filters filters={FILTERS} filter={filter} onChange={setFilter} />
            <FlatList
            data={data}
            renderItem={({item}) => <View>
                <Text onPress={ () => console.log(item.noteName)} style={{marginLeft: 30}} >{item.noteName + " " + item.section}</Text>
                
            </View>}
            />
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
