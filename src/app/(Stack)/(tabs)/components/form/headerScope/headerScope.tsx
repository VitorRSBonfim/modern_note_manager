import { View, Text, TextInput } from "react-native"
import { style } from "../styles"
import { Link } from "expo-router"
import { useState } from "react"
import { DB } from "@/src/database/localDatabase/databaseOp/db"
import { Button } from "react-native"




export function ScopeForm(){

    const db = DB()
    const [service, setService] = useState("")
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
    const [color, setColor] = useState("#7A4ED9")
    
    async function insertNotes() {
        try {
            const result = await db.insertNotes(noteName, noteContent, noteDate, section, color)
            console.log(result)
        } catch (error) {
            
        }
    }

    return (
        
        <View style={style.containerScope}>
            
            
            <TextInput onChangeText={setNoteName} value={noteName} multiline={true} maxLength={20} placeholder="Sem título" placeholderTextColor={"#7A4ED9"} style={style.inputNoteName}/>
            <TextInput onChangeText={setNoteContent} value={noteContent} multiline={true} placeholder="Clique para continuar"/>
            <Button title="aaaa" onPress={insertNotes}></Button>
        </View>
    )
}
