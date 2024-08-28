import { View, Text, FlatList, Pressable } from "react-native"
import { AllNotes } from "@/src/database/staticData/recents/recentsData"
import { StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { AntDesign, FontAwesome } from "@expo/vector-icons"

type GetBySection = {
    filter: String
}

var newArray = [{}]


export function OlderNotes() {
    return (     
        <FlatList
            data={AllNotes}
            renderItem={({item}) =>
                <View style={styles.container}>
                    <Pressable onPress={() => {console.log("ABRIR NOTA")}}>
                    <View style={styles.containerNote}>

                        <View style={{flexDirection: "row"}}>
                            <View style={{width: 8,backgroundColor: "#7A4ED9", borderTopLeftRadius: 10, borderBottomLeftRadius: 10}}>
                                
                            </View>
                            <View style={styles.containerContent}>
                                <Text style={styles.contentTittle}>
                                    {item.noteName}
                                </Text>   
                                <Text style={styles.contentSub}>
                                    {item.noteContent}
                                </Text>  
                            </View>                            
                        </View>

                        <View style={{alignContent: "flex-end", justifyContent: "flex-end"}}>
                            <Text style={{fontSize: 10, marginRight: 4, marginBottom: 4}}>
                                {item.noteDate}
                            </Text>
                        </View>

                        </View>
                    </Pressable>

                </View>
            }
            
            keyExtractor={item => String(item.id)}
            showsVerticalScrollIndicator={false}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        
    },
    containerNote: {
        minHeight: 80,
        width: "90%",
        backgroundColor: "#FFFFFF",
        marginTop: 10,
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    containerContent: {
        
    },
    contentTittle: {
        fontSize: 20,
        paddingLeft: 8
    },
    contentSub: {
        fontSize: 14,
        paddingLeft: 8
    }
})
