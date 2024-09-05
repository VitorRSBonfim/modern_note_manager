import { View, Text, FlatList, Pressable } from "react-native"
import { AllNotes } from "@/src/database/staticData/recents/recentsData"
import { StyleSheet } from "react-native"
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons"
import { Navigator, Redirect, router } from "expo-router"
import { Link, NavigationContainer } from "@react-navigation/native"
import { Divider } from '@rneui/themed';
import { Modal } from "react-native"
import { useState } from "react"
import { expNewObjectData } from "../recent/recents"
type GetBySection = {
    filter: String
}

var newArray = [{}]


export function OlderNotes() {
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const [pressedId, setPressedId] = useState(1)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    if (isOpen) {
        router.navigate("/(Stack)/newNote/newNote")
        setIsOpen(false)
    }

    return (     
        
        <SafeAreaView style={{flex: 1}}>
            <View style={{}}>
            
                <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                        setModalVisible(!modalVisible);
                        }}>
                            <View style={{backgroundColor: "#FFFFFF", maxHeight: 200, position: "absolute", bottom: 0, width: "100%", borderRadius: 30, paddingBottom: 10}}>
                                <Text onPress={()=>{setModalVisible(false)}} style={{marginLeft: 10, marginTop: 5}}>
                                    <Ionicons name="close-outline" size={28} />
                                </Text>
                                <View >
                                    <Pressable style={styles.pressableEdit}>
                                        <Text style={{color: "#FFFFFF", textAlign: "center"}}>
                                            Edit
                                        </Text>
                                    </Pressable>
                                    <Pressable style={styles.pressableDelete}>
                                        <Text style={{color: "#FFFFFF", textAlign: "center"}}>
                                            Delete {pressedId}
                                        </Text>
                                    </Pressable>
                                </View>
            
                            </View>
                        </Modal>
                        <FlatList
                data={AllNotes}
                renderItem={({item}) =>
                    <View style={styles.container}>
                        <Pressable onLongPress={()=> {setModalVisible(true), setPressedId(item.id)}} style={{ minHeight: 60, marginBottom: 10, marginTop: 10}} onPress={()=>{setIsOpen(true), console.log(isOpen)}}>
                            <View  style={styles.containerNote}>
                                <View style={{flexDirection: "row", maxWidth: "90%"}}>
                                    <View style={{width: 8,backgroundColor: item.color, borderTopLeftRadius: 10, borderBottomLeftRadius: 10}}>
            
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
            
            </View>
        </SafeAreaView>
       
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
        
        borderRadius: 10,
        
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
    },
    pressableEdit: {
        width: "90%",
        backgroundColor: "#524B63",
        alignSelf: "center",
        borderRadius: 10,
        height: 40,
        justifyContent: "center"
    },
    pressableDelete: {
        width: "90%",
        backgroundColor: "#FF6363",
        alignSelf: "center",
        borderRadius: 10,
        height: 40,
        marginTop: 10,
        justifyContent: "center"
    }
})
