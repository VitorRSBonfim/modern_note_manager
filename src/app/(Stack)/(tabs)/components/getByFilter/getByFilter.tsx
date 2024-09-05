import { View, Text, StatusBar } from "react-native"
import { FlatList } from "react-native"
import { AllNotes } from "@/src/database/staticData/recents/recentsData"
import { HomeComp } from "../homeScreen/homeScreen"
import { StyleSheet } from "react-native"
import { Pressable } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useState } from "react"
import { router } from "expo-router"

type GetSecProps = {
    filter: String
}



// const currentyDate = date.getDate()  + "/" + date.getDay() + "/" + date.getFullYear()

function GetSec({filter}: GetSecProps) {

    const newObjectData = []

    for ( let c = 0; c < AllNotes.length; c++) {
        if (AllNotes[c].section == filter) {
            newObjectData.push({id: AllNotes[c].id, noteName: AllNotes[c].noteName, noteContent: AllNotes[c].noteContent, noteDate: AllNotes[c].noteDate, noteState: AllNotes[c].noteState, section: AllNotes[c].noteState, color: AllNotes[c].color})
            
        }
    }

    const expNewObjectData = newObjectData
    const [isPressed, setIsPressed] = useState<boolean>(false)
    
    if (filter != "all") {
        
        return (
            <FlatList
            data={newObjectData}
            renderItem={({item}) => (
                <View style={styles.container}>
                    <StatusBar barStyle={"dark-content"}/>
                    <Pressable onPress={() => {router.navigate("/(Stack)/newNote/newNote"), console.log("tasks")}}>
                    <View style={styles.containerNote}>

                        <View style={{flexDirection: "row", maxWidth: "90%"}}>
                            <View style={{width: 8,backgroundColor: item.color, borderTopLeftRadius: 10, borderBottomLeftRadius: 10}}>
                                
                            </View>
                            <View style={styles.containerContent}>
                                <Text style={styles.contentTittle}>
                                    {item.noteName}
                                </Text>   
                                <Text style={styles.contentSub}>
                                    {item.noteContent}
                                </Text>  
                            </View>                            
                        </View>

                        <View style={{alignContent: "flex-end", justifyContent: "flex-end"}}>
                            <Text style={{fontSize: 10, marginRight: 4, marginBottom: 4}}>
                                {item.noteDate}
                            </Text>
                        </View>

                        </View>
                    </Pressable>

                </View>
            )}/>
        )
    } else if (filter == "all") {
        return (
            <HomeComp/>
        )
    }

    for ( let c = 0; c < AllNotes.length; c++) {
    

        if (AllNotes[c].section == filter) {
            
            // newObjectData.push({id: AllNotes[c].id, noteName: AllNotes[c].noteName, noteContent: AllNotes[c].noteContent, noteDate: AllNotes[c].noteDate, noteState: AllNotes[c].noteState})
            console.log(AllNotes[c].noteContent)
            
        }        
    }   
}


export function SecScreen({filter}: GetSecProps) {
    
    return (
        <GetSec filter={filter}/>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        
    },
    containerNote: {
        minHeight: 80,
        width: "90%",
        backgroundColor: "#FFFFFF",
        marginTop: 10,
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    containerContent: {
        
    },
    contentTittle: {
        fontSize: 20,
        paddingLeft: 8
    },
    contentSub: {
        fontSize: 14,
        paddingLeft: 8
    }
})
