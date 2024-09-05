import { View } from "react-native"
import { HeaderNew } from "./components/headerForm"
import { ScopeForm } from "./components/headerScope"

export default function EditNote() {
    return (
        <View>
            <HeaderNew/>
            <ScopeForm/>
        </View>
    )
}
