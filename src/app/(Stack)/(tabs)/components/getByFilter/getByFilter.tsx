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
import { SafeAreaView } from "react-native-safe-area-context"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Header } from "../header"
import { Filter } from "../filter"
import { Filters } from "../filters"
import { dbType } from "@/src/database/localDatabase/databaseOp/db"
import { useTabEffect } from "../../_layout"
import { DB } from "@/src/database/localDatabase/databaseOp/db"
type GetSecProps = {
    filter: String
}

type AllNotesProps = {
    id: number,
}


// const currentyDate = date.getDate()  + "/" + date.getDay() + "/" + date.getFullYear()

function GetSec({filter}: GetSecProps) {
 
    const [newObjectData, setNewObjectData] = useState<{id: number, noteName: string, noteContent: string, noteDate: string, section: string, color: string}[]>([])
    const [pressedId, setPressedId] = useState<number>()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [noteArraybySec, setArraySec] = useState<dbType[]>()
    const [modalVisible, setModalVisible] = useState(false);
    const [noteArray, setNoteArray] =  useState<dbType[]>([])
    const [idDel, setIdDel] = useState<number>()

    for ( let c = 0; c < noteArray.length; c++) {
        if (noteArray[c].section == filter) {
            newObjectData.push({id: noteArray[c].id, noteName: noteArray[c].noteName, noteContent: noteArray[c].noteContent, noteDate: noteArray[c].noteDate, section: noteArray[c].section, color: noteArray[c].color})
        }
    }

    const expNewObjectData = newObjectData
    const [isPressed, setIsPressed] = useState<boolean>(false)
    
    if ( FILTERS.length > 0) {

        async function deleteNote(id: number) {
       
            try {
            
                console.log("This" + idDel)
    
                const response = await db.deleteNote(id)
                console.log(response)
                
            } catch (error) {
                
            }     
        }

        if (filter != "all") {
            const db = DB()

            async function fetchNote() {
                
                try {
                    const response = await db.fetchNotes()
                    console.log(response)

                    if (response != null) {
                        setNoteArray(response)
                    }

                } catch (error) {
                    console.log(error)
                }

            }
            useTabEffect("/", () => {
                fetchNote()
                console.log("Notas Carregadas")
            });
            return (
                
                    <FlatList
                    data={noteArray}
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
            const db = DB()

            async function fetchNote() {
                try {
                    const response = await db.fetchNotes()
                    console.log(response)

                    if (response != null) {
                        setNoteArray(response)
                    }

                } catch (error) {
                    console.log(error)
                }

            }

            async function deleteNote(id: number) {

                try {

                    console.log("This" + idDel)

                    const response = await db.deleteNote(id)
                    console.log(response)

                } catch (error) {

                }
            }
            

            useTabEffect("/", () => {
                fetchNote()
                console.log("Notas Carregadas")
            });
            return (
                <SafeAreaProvider style={{height: "100%"}}>
                    
                    <SafeAreaView >
                    <FlatList
                        
                        data={noteArray}
                        
                        renderItem={({ item }) =>
                            <Pressable onPress={() => { console.log("mostrar nota"), router.navigate("/(Stack)/newNote/newNote")}}>
                                <View style={[styles2.containerNote, { backgroundColor: item.color }]}>
                                    <Text style={styles2.txtNoteTittle}>
                                        {item.noteName}
                                    </Text>
                                    <Text style={styles2.txtNoteContent}>
                                        {item.noteContent}
                                    </Text>
                                    <View style={{ flex: 1, alignItems: "flex-end", justifyContent: "space-between", width: "100%", flexDirection: "row" }}>
                                        <Pressable style={styles2.containerPressableDelete} onPress={() => { setIdDel(item.id), deleteNote(item.id), fetchNote(),console.log(typeof (item.id)) }}>
                                            <MaterialCommunityIcons name="delete-empty-outline" size={20} color={item.color} />
                                        </Pressable>
                                        <Text style={{ marginRight: 4, color: "#FFFFFF", fontSize: 12 }}>{item.noteDate}</Text>
                                    </View>
                                </View>
                            </Pressable>
                        }
                        keyExtractor={item => String(item.id)}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles2.containerList}
                        
                    />
                    </SafeAreaView>

                    <FlatList
                    data={noteArray}
                    renderItem={({item}) =>
                        <View style={{alignItems: "center"}}>
                            <Pressable onLongPress={()=> {setModalVisible(true), setIdDel(item.id)}} style={{ minHeight: 60, marginBottom: 10, marginTop: 10}} onPress={()=>{router.navigate("/newNote/newNote"), console.log(isOpen)}}>
                                <View  style={styles2.containerNote2}>
                                    <View style={{flexDirection: "row", maxWidth: "90%"}}>
                                        <View style={{width: 8,backgroundColor: item.color, borderTopLeftRadius: 10, borderBottomLeftRadius: 10}}>
        
                                        </View>
                                        <View style={styles2.containerContent}>
                                            <Text style={styles2.contentTittle}>
                                                {item.noteName}
                                            </Text>
                                            <Text style={styles2.contentSub}>
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
                    }
                    keyExtractor={item => String(item.id)}
                    showsVerticalScrollIndicator={false}
                />
        </SafeAreaProvider>
            )
        }     
    } else if (FILTERS.length <= 0 || AllNotes.length == 0) {
        return (
            <SafeAreaProvider>
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
            </SafeAreaProvider>
        )
    }
    
    for ( let c = 0; c < AllNotes.length; c++) {
    

        if (AllNotes[c].section == filter) {
            
            // newObjectData.push({id: AllNotes[c].id, noteName: AllNotes[c].noteName, noteContent: AllNotes[c].noteContent, noteDate: AllNotes[c].noteDate, noteState: AllNotes[c].noteState})
        
            
        }        
    }   
}


export function Components() {

    const [filter, setFilter] = useState<string>(FILTERS[0])

    if (FILTERS.length <= 0) {
        console.log("VAZIO")
    }
    return (
        
        <SafeAreaView style={{height: "100%"}}>
            <StatusBar barStyle={"dark-content"}/>
            <Header/>
            <Filters filters={FILTERS} filter={filter} onChange={setFilter}/>
            <GetSec filter={filter}/>
            
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

const styles2 = StyleSheet.create({
    containerList: {
        gap: 8,
        paddingLeft: 18,
        paddingRight: 18,
        marginBottom: 20
    },
    containerNote: {
        minWidth: 200,
        minHeight: 160,
        maxWidth: 200,
        maxHeight: 160,
        borderRadius: 10,
        alignItems: "flex-start",
        marginLeft: 2,
        marginRight: 2,
        backgroundColor: "blue",
    },
    txtTittle: {
        marginTop: 8,
        marginLeft: 20,
        marginBottom: 8,
        fontSize: 14
    },
    txtNoteTittle: {
        color: "#FFFFFF",
        fontSize: 20,
        fontFamily: "Roboto",
        marginLeft: 4
    },
    txtNoteContent: {
        color: "#FFFFFF",
        fontSize: 12,
        fontFamily: "Roboto",
        marginLeft: 4
    },
    containerPressableDelete: {
        backgroundColor: "#FFFFFF",
        padding: 12,
        borderRadius: 100,
        marginLeft: 4,
        marginBottom: 4
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
    },
    pressableEdit: {
        width: "90%",
        backgroundColor: "#524B63",
        alignSelf: "center",
        borderRadius: 10,
        height: 40,
        justifyContent: "center"
    },
    pressableDelete: {
        width: "90%",
        backgroundColor: "#FF6363",
        alignSelf: "center",
        borderRadius: 10,
        height: 40,
        marginTop: 10,
        justifyContent: "center"
    },
    container: {
        alignItems: "center",
        
    },
    containerNote2: {
        minHeight: 80,
        width: "90%",
        backgroundColor: "#FFFFFF",
        
        borderRadius: 10,
        
        flexDirection: "row",
        justifyContent: "space-between",
    },
}) 



