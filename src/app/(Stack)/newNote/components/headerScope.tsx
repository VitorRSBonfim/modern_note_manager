import { View, Text, TextInput } from "react-native"
import { style } from "../style"
import { Link } from "expo-router"
import { useState } from "react"

export function ScopeForm(){
    const [noteName, setNoteName] = useState<string>()
    const [noteContent, setNoteContent] = useState<string>()
    return (
        <View style={style.containerScope}>
            <TextInput placeholder="Nome Nota" placeholderTextColor={"#7A4ED9"} style={style.inputNoteName}/>
            <TextInput placeholder="Descricao nota"/>
        </View>
    )
}
