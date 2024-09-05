
import { View, Text, FlatList } from "react-native"
import { StyleSheet } from "react-native"
import { AllNotes } from "@/src/database/staticData/recents/recentsData"
import { useState } from "react"
import { Pressable } from "react-native"
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons"
import { router, Router } from "expo-router"
import { useEffect } from "react"
import { DB } from "@/src/database/localDatabase/databaseOp/db"
import { usePathname } from "expo-router"
import { useTabEffect } from "../../_layout"
import { dbType } from "@/src/database/localDatabase/databaseOp/db"
export function HomeScreen() {
    
    const [modalVisible, setModalVisible] = useState(false);
    const [noteArray, setNoteArray] =  useState<dbType[] | undefined  >([])
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
        <View>
             <View style={{height: "100%"}}>
                <Text style={styles.txtTittle}>
                    Recent
                </Text>
                    <FlatList
                    data={noteArray}
                    renderItem={({item}) =>
                        <Pressable onPress={() => {console.log("mostrar nota"), router.navigate("/(Stack)/newNote/newNote")}}>
                            <View style={[styles.containerNote, {backgroundColor: item.color}]}>
                        
                        <Text style={styles.txtNoteTittle}>
                            {item.noteName}
                        </Text>
                        <Text style={styles.txtNoteContent}>
                            {item.noteContent}
                        </Text>
                        <View style={{flex: 1, alignItems: "flex-end",justifyContent: "space-between", width: "100%", flexDirection: "row"}}>
                            <Pressable style={styles.containerPressableDelete} onPress={()=> {setIdDel(item.id), deleteNote(item.id), fetchNote(), console.log(typeof(item.id))}}>
                                <MaterialCommunityIcons name="delete-empty-outline" size={20} color={item.color}/>
                            </Pressable>
                            <Text style={{marginRight: 4, color: "#FFFFFF", fontSize: 12}}>{item.noteDate}</Text>
                        </View>
                        </View>
                        </Pressable>
                    }
                    keyExtractor={item => String(item.id)}
                    horizontal
                    showsHorizontalScrollIndicator={true}
                    contentContainerStyle={styles.containerList}
                    />
                
            </View>
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
    }
}) 


