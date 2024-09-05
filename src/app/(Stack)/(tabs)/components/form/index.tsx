import { View } from "react-native";
import { HeaderNew } from "./headerForm/header";
import { ScopeForm } from "./headerScope/headerScope";

export function FormAddNote() {
    return (
        <View>
            <HeaderNew/>
            <ScopeForm/>
        </View>
    )
}
