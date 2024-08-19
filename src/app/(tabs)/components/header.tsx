import { View, Text } from "react-native"
import { StyleSheet } from "react-native"
import { EvilIcons } from "@expo/vector-icons"

export const Header = () => {
    return (
        <View style={styles.containerHeader}>
            <Text style={styles.txtHeader}>
                精神
            </Text>
            <EvilIcons name="search" size={50}></EvilIcons>
        </View>
    )
}

const styles = StyleSheet.create({
    containerHeader: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
        paddingLeft: 20,
        paddingRight: 20
    },
    txtHeader: {
        fontSize: 40
    }
})

