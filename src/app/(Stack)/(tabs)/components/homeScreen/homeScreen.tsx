import { View, Text } from "react-native"
import { StatusBar } from "react-native"
import { Header } from "../header"
import { Filters } from "../filters"
import { AllNotes } from "@/src/database/staticData/recents/recentsData"
import { FILTERS } from "@/src/database/staticData/filter/filterData"
import { Filter } from "../filter"
import { useState } from "react"
import { RecentsNotes } from "../recent/recents"
import { StyleSheet } from "react-native"
import { OlderNotes } from "../oldersNotes/older"

type aa = {
    f: string
}

function Fl({f}: aa) {
    if (f ==  "section01" ) {
        return (<Text style={{fontSize: 900}}>AAAAAAAAAAAAAAAAAAAAAAAA</Text>)
    }
}

export function HomeComp() {
    const [filter, setFilter] = useState(FILTERS[0])
    
    return (
        <View style={{flex: 1 ,  height: "100%"}}>
            <StatusBar barStyle={"dark-content"} translucent={true} backgroundColor="transparent" />
            <RecentsNotes/>
            <Text style={styles.txtOlders}>
                Older Notes
            </Text>
            <OlderNotes/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    txtOlders: {
        marginLeft: 20
    }
})
