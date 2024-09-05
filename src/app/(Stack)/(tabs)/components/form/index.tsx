import { HeaderNew } from "./headerForm/header";
import { ScopeForm } from "./headerScope/headerScope";
import { View, Text } from "react-native"
import { Pressable } from "react-native"
import { style } from "./styles";
import { AntDesign, MaterialIcons, Octicons, SimpleLineIcons } from "@expo/vector-icons"
import { Modal } from "react-native"
import { useState } from "react"
import { Select } from "native-base"
import { CheckIcon } from "native-base"
import { Box } from "native-base"
import { Center } from "native-base"
import React from "react"
import { NativeBaseProvider } from "native-base"
import { GetFilters } from "./filterGet";
import { PresenceTransition } from "native-base"
import { Link } from "expo-router"
import { DB } from "@/src/database/localDatabase/databaseOp/db"
import { Button } from "react-native"
import { TextInput } from "react-native";
import { styles } from "../filter/style";
import { FlatList } from "react-native-gesture-handler";
import { FILTERS } from "@/src/database/staticData/filter/filterData";
import { AllNotes } from "@/src/database/staticData/recents/recentsData";
import { Picker } from "@react-native-picker/picker";

function Ga(){
    const newArray = []
    for (let c = 0; FILTERS.length; c++) {
        newArray.push(FILTERS[c])
        return (
            <Picker.Item label={String(FILTERS[c])} value={String(FILTERS[c])} />
        )
    }
    
}


function GetByFilter(){
    const [selectedLanguage, setSelectedLanguage] = useState();
    
    return (
        <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
            }>
            <Ga/>
        </Picker> 
    )
}


export function FormAddNote() {
    
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const [service, setService] = useState("")
    const db = DB()
    const [noteName, setNoteName] = useState("")
    const [noteContent, setNoteContent] = useState("")
    const date = new Date;
    const currentyDay = date.getDate()
    const currentyMonth = date.getMonth()
    const currentyYear = date.getFullYear()
    const fullDate = currentyDay + "/" + (currentyMonth + 1) + "/" + currentyYear
    console.log(currentyDay, currentyMonth, currentyYear)
    const [noteDate, setNoteDate] = useState(fullDate)
    const [section, setSection] = useState("all")
    const [color, setColor] = useState("#FDB11C")
    async function insertNotes() {
        try {
            const result = await db.insertNotes(noteName, noteContent, noteDate, section, color)
            console.log(result)
        } catch (error) {
            
        }
    }
    return (
        <View>
            <View style={style.containerHeader}>
                <Modal
                 animationType="slide"
                 transparent={true}
                 visible={modalVisible}
                 onRequestClose={() => {
                 setModalVisible(!modalVisible);
                }}>
                    <View style={{position: "absolute", height: 400, backgroundColor: "#FFFFFF", bottom: 0, width: "100%"}} >
                
                        <Pressable style={{maxWidth: 38, marginTop: 10, marginLeft: 10, padding: 4, backgroundColor: "#7A4ED9", borderRadius: 100}} onPress={()=>{setModalVisible(false)}}>
                
                            <AntDesign name="close" size={30} color={"#FFFFFF"} />
                
                        </Pressable>
                        
                        <GetByFilter/>
                        
                        
                           
                    </View>
                 </Modal>
                <Pressable style={style.containerBtnSave} onPress={insertNotes}>
                    <Text style={style.txtHeader}>
                        Save
                    </Text>
                
                </Pressable>
                <Pressable onPress={()=>{setModalVisible(true)}}>
                    <SimpleLineIcons name="options-vertical" size={20}/>
                </Pressable>
            </View>
            <View style={style.containerScope}>
            
            <TextInput onChangeText={setNoteName} value={noteName} multiline={true} maxLength={20} placeholder="Sem título" placeholderTextColor={"#7A4ED9"} style={style.inputNoteName}/>
            <TextInput onChangeText={setNoteContent} value={noteContent} multiline={true} placeholder="Clique para continuar"/>
        </View>
        </View>
    )
}
