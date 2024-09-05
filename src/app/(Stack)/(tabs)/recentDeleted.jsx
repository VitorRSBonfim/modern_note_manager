import { View, Text } from "react-native"
import { StyleSheet } from "react-native"
import { RecentDeletedNotes } from "./components/recent/recentDeleted"

export function recentDeleted() {
    return (
        <View>
            <RecentDeletedNotes></RecentDeletedNotes>
        </View>
    )
}

