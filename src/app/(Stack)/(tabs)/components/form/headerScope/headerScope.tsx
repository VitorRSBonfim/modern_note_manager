import { View, Text, TextInput } from "react-native"
import { style } from "../styles"
import { Link } from "expo-router"

export function ScopeForm(){
    return (
        <View>
            <TextInput placeholder="Sem título" placeholderTextColor={"#7A4ED9"} style={style.inputNoteName}/>
            <TextInput placeholder="Clique para continuar"/>
            <Link href={"/(Stack)/newNote/newNote"}>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Link>
        </View>
    )
}
