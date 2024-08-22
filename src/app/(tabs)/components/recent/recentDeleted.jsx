import  { View, Text } from "react-native"
import { StyleSheet } from "react-native"


export function RecentDeletedNotes() {
    return (
        <View>
            <Text>
                Recent Deleted Notes
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
}) 
