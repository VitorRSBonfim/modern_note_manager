import { View, Text, TextInput } from "react-native"
import { style } from "../style"
import { Link } from "expo-router"

export function ScopeForm(){
    return (
        <View style={style.containerScope}>
            <TextInput placeholder="Nome Nota" placeholderTextColor={"#7A4ED9"} style={style.inputNoteName}/>
            <TextInput placeholder="Descricao nota"/>
        </View>
    )
}
