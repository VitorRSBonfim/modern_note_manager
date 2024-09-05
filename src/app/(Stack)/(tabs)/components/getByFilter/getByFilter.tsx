import { View, Text, StatusBar } from "react-native"
import { FlatList } from "react-native"
import { AllNotes } from "@/src/database/staticData/recents/recentsData"
import { HomeScreen } from "../homeScreen/homeScreen"
import { StyleSheet } from "react-native"
import { Pressable } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useState } from "react"
import { router } from "expo-router"
import { FILTERS } from "@/src/database/staticData/filter/filterData"
import { Init } from "./init"
import { SafeAreaView } from "react-native"
type GetSecProps = {
    filter: String
}

type AllNotesProps = {
    id: number,
}


// const currentyDate = date.getDate()  + "/" + date.getDay() + "/" + date.getFullYear()

function GetSec({filter}: GetSecProps) {

    
    const [newObjectData, setNewObjectData] = useState<{id: number, noteName: string, noteContent: string, noteDate: string, section: string, color: string}[]>([])
    

    for ( let c = 0; c < AllNotes.length; c++) {
        if (AllNotes[c].section == filter) {
            newObjectData.push({id: AllNotes[c].id, noteName: AllNotes[c].noteName, noteContent: AllNotes[c].noteContent, noteDate: AllNotes[c].noteDate, section: AllNotes[c].section, color: AllNotes[c].color})
            
        }
    }

    const expNewObjectData = newObjectData
    const [isPressed, setIsPressed] = useState<boolean>(false)
    
    if ( FILTERS.length > 0) {
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
        } else if (filter == "all" ) {
            return (
                <HomeScreen/>
            )
        }     
    } else if (FILTERS.length <= 0) {
        return (
            <View style={{justifyContent: "center", alignItems: "center", height: "100%"}}>
                <Text style={{fontSize: 60, color: "#524B63"}}>
                    精
                </Text>
                <Text style={{fontSize: 60, color: "#524B63"}}>
                    神
                </Text>
                <Text style={{fontWeight: "light", color: "#343239"}}>
                    No one note
                </Text>
            </View>
        )
    }
    
    for ( let c = 0; c < AllNotes.length; c++) {
    

        if (AllNotes[c].section == filter) {
            
            // newObjectData.push({id: AllNotes[c].id, noteName: AllNotes[c].noteName, noteContent: AllNotes[c].noteContent, noteDate: AllNotes[c].noteDate, noteState: AllNotes[c].noteState})
        
            
        }        
    }   
}


export function SecScreen({filter}: GetSecProps) {
    if (FILTERS.length <= 0) {
        console.log("VAZIO")
    }
    return (
        <SafeAreaView style={{height: "100%"}}>
            <View>
                <GetSec filter={filter}/>
            </View>
        </SafeAreaView>
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
