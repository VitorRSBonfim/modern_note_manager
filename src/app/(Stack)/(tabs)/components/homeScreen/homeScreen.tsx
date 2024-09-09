
import { View, Text, FlatList } from "react-native"
import { StyleSheet } from "react-native"
import { AllNotes } from "@/src/database/staticData/recents/recentsData"
import { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons"
import { router, Router } from "expo-router"
import { useEffect } from "react"
import { DB } from "@/src/database/localDatabase/databaseOp/db"
import { usePathname } from "expo-router"
import { useTabEffect } from "../../_layout"
import { dbType } from "@/src/database/localDatabase/databaseOp/db"
import { Modal } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { Pressable } from "react-native"
import { Header } from "../header"
import { Filter } from "../filter"
import { Filters } from "../filters"
import { FILTERS } from "@/src/database/staticData/filter/filterData"
export function HomeScreen() {
    const [filter, setFilter] = useState<string>(FILTERS[0])

    const [pressedId, setPressedId] = useState<number>()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    
    const [modalVisible, setModalVisible] = useState(false);
    const [noteArray, setNoteArray] =  useState<dbType[] | undefined >([])
    const [idDel, setIdDel] = useState<number>()
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
                <View style={{height: "100%"}}>
                        <SafeAreaView>
                            <FlatList
                                
                                data={noteArray}
                                
                                renderItem={({ item }) =>
                                    <Pressable onPress={() => { console.log("mostrar nota"), router.navigate("/(Stack)/newNote/newNote")}}>
                                        <View style={[styles.containerNote, { backgroundColor: item.color }]}>
                                            <Text style={styles.txtNoteTittle}>
                                                {item.noteName}
                                            </Text>
                                            <Text style={styles.txtNoteContent}>
                                                {item.noteContent}
                                            </Text>
                                            <View style={{ flex: 1, alignItems: "flex-end", justifyContent: "space-between", width: "100%", flexDirection: "row" }}>
                                                <Pressable style={styles.containerPressableDelete} onPress={() => { setIdDel(item.id), deleteNote(item.id), fetchNote(), console.log(typeof (item.id)) }}>
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
                                contentContainerStyle={styles.containerList}
                                
                            />
                        </SafeAreaView>
                    
                
                            <FlatList
                            data={noteArray}
                            renderItem={({item}) =>
                                <View style={{alignItems: "center"}}>
                                    <Pressable onLongPress={()=> {setModalVisible(true), setIdDel(item.id)}} style={{ minHeight: 60, marginBottom: 10, marginTop: 10}} onPress={()=>{router.navigate("/newNote/newNote"), console.log(isOpen)}}>
                                        <View  style={styles.containerNote2}>
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
                            }
                            keyExtractor={item => String(item.id)}
                            showsVerticalScrollIndicator={false}
                        />
                
                
                </View>
    )
}


const styles = StyleSheet.create({
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


