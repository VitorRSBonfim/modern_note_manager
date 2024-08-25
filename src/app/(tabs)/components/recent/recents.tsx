import { View, Text, FlatList } from "react-native"
import { StyleSheet } from "react-native"
import { AllNotes } from "@/src/database/staticData/recents/recentsData"
import { useState } from "react"
import { useEffect } from "react"
import { Modal } from "react-native"
import { Pressable, Alert } from "react-native"
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons"

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
// const currentyDate = date.getDate()  + "/" + date.getDay() + "/" + date.getFullYear()



for ( let c = 0; c < 4; c++) {
    
        
    let tDay = AllNotes[c].noteDate.slice(0, 2)
    let tMonth = AllNotes[c].noteDate.slice(3, 5)
    let tYear = AllNotes[c].noteDate.slice(6, 10)
    
    console.log(tDay, tMonth, tYear)

    if ( parseInt(tYear) === currentyYear && parseInt(tMonth) === currentyMonth + 1 && parseInt(tDay) >= currentyDay - 2 ) {
        
        newObjectData.push({id: AllNotes[c].id, noteName: AllNotes[c].noteName, noteContent: AllNotes[c].noteContent, noteDate: AllNotes[c].noteDate, noteState: AllNotes[c].noteState})
        console.log(c)

    } 
        
}
 
export const expNewObjectData = newObjectData



console.log(expNewObjectData)




export function RecentsNotes() {

    const [modalVisible, setModalVisible] = useState(false);


    return (
       
           
            <View>

                <Text style={styles.txtTittle}>
                    Recent
                </Text>
                <Pressable onPress={() => {console.log("mostrar nota")}}>
                    <FlatList
                    data={expNewObjectData}
                    renderItem={({item}) =>
                    <View style={styles.containerNote}>
                       
                        <Text style={styles.txtNoteTittle}>
                            {item.noteName}
                        </Text>
                        <Text style={styles.txtNoteContent}>
                            {item.noteContent}
                        </Text>
                        <View style={{flex: 1, alignItems: "flex-end",justifyContent: "space-between", width: "100%", flexDirection: "row"}}>
                            <Pressable style={styles.containerPressableDelete} onPress={() => console.log("Delete")}>
                                <MaterialCommunityIcons name="delete-empty-outline" size={20} color={"#7A4ED9"}/>
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
        backgroundColor: "#7A4ED9", // Definida pelo usuario futuramente
        minWidth: 200,
        minHeight: 200,
        maxWidth: 200,
        maxHeight: 200,
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
