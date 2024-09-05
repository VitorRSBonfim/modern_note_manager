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
/*  

if the year is older than the currenty year (Is older)
if the year isnt of this month (Is older)
if the date is older than the last 3 days (Is older)

case this compariment conditions then this note is new (Recent)


Note ID
Note Name
Note Content 
Note Date 
Note State (Recent deleted or Deleted Permenant)


*/




//** Getting the currenty Date */

const date = new Date()
const currentyDay = date.getDate()
const currentyMonth = date.getMonth()
const currentyYear = date.getFullYear()
const newObjectData = []
const newObjectColors = []
// const currentyDate = date.getDate()  + "/" + date.getDay() + "/" + date.getFullYear()



for ( let c = 0; c < AllNotes.length; c++) {
    
        
    let tDay = AllNotes[c].noteDate.slice(0, 2)
    let tMonth = AllNotes[c].noteDate.slice(3, 5)
    let tYear = AllNotes[c].noteDate.slice(6, 10)
    
    
 
    if ( parseInt(tYear) === currentyYear && parseInt(tMonth) === currentyMonth + 1 && parseInt(tDay) >= currentyDay - 2) {
        
        newObjectData.push({id: AllNotes[c].id, noteName: AllNotes[c].noteName, noteContent: AllNotes[c].noteContent, noteDate: AllNotes[c].noteDate, color: AllNotes[c].color})
    
    } 
        
}
 
export const expNewObjectData = newObjectData



console.log(expNewObjectData)




export function RecentsNotes() {
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

    async function deleteNote() {
        console.log(idDel)
        try {
            if (idDel!=null) {
                const response = await db.deleteNote(idDel)
                console.log(response)
            }
        } catch (error) {
            
        }
    }

    useTabEffect("/", () => {
        fetchNote()
        console.log("dd")
    });

    return (
       
           
            <View>
                <Text style={styles.txtTittle}>
                    Recent
                </Text>
                <Pressable onPress={() => {console.log("mostrar nota"), router.navigate("/(Stack)/newNote/newNote")}}>
                    <FlatList
                    data={noteArray}
                    renderItem={({item}) =>
                    <View style={[styles.containerNote, {backgroundColor: item.color}]}>
                       
                        <Text style={styles.txtNoteTittle}>
                            {item.noteName}
                        </Text>
                        <Text style={styles.txtNoteContent}>
                            {item.noteContent}
                        </Text>
                        <View style={{flex: 1, alignItems: "flex-end",justifyContent: "space-between", width: "100%", flexDirection: "row"}}>
                            <Pressable style={styles.containerPressableDelete} onPress={()=> {setIdDel(item.id), deleteNote(), fetchNote()}}>
                                <MaterialCommunityIcons name="delete-empty-outline" size={20} color={item.color}/>
                            </Pressable>
                            <Text style={{marginRight: 4, color: "#FFFFFF", fontSize: 12}}>{item.noteDate}</Text>
                        </View>
                    </View>
                    }
                    keyExtractor={item => String(item.id)}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.containerList}
                    />
                </Pressable>
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
