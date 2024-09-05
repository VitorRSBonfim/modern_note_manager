import { View, Text } from "react-native"
import { StyleSheet, StatusBar } from "react-native"
import { EvilIcons } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"

export const Header = () => {
    return (
        <View style={styles.containerHeader}>
    

            <Text style={styles.txtHeader}>
                精神
            </Text>
            <EvilIcons name="search" size={30}></EvilIcons>
        </View>
    )
}

const styles = StyleSheet.create({
    containerHeader: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        justifyContent: "space-between",
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10
    },
    txtHeader: {
        fontSize: 30
    }
})

