import { View, Text, FlatList } from "react-native"
import { AllNotes } from "@/src/database/staticData/recents/recentsData"
import { StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"



export function OlderNotes() {
    return (
     
                
        <FlatList
            data={AllNotes}
            renderItem={({item}) =>
                <View style={styles.container}>
                    <View>
                        <Text>
                            {item.id}
                        </Text>   
                    </View>
                    
                </View>
            }
            keyExtractor={item => String(item.id)}
        />
            
     
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red"
    }
})
