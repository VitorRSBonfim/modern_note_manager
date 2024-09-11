import { View, Text } from "react-native"
import { Pressable } from "react-native"
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons"
import  Modal  from "react-native-modal"
import { useState } from "react"
import { router } from "expo-router"
import { TextInput } from "react-native"
import { style } from "../(tabs)/components/form/styles"
import { StatusBar } from "react-native"
import { FlatList } from "react-native"
import { DB } from "@/src/database/localDatabase/databaseOp/db"
import { COLORS } from "@/src/database/staticData/colors/color"
export default function EditNote() {
    const [isModalVisible, setModalVisible] = useState<boolean>(false)
    const [isPressed, setIsPressed] = useState<boolean>(false)
    const [color, setColor] = useState(COLORS[0])
    const [service, setService] = useState("")
    const db = DB()
    const [noteName, setNoteName] = useState("")
    const [noteContent, setNoteContent] = useState("")
    const date = new Date;
    const currentyDay = date.getDate()
    const currentyMonth = date.getMonth()
    const currentyYear = date.getFullYear()
    const fullDate = currentyDay + "/" + (currentyMonth + 1) + "/" + currentyYear
    console.log(currentyDay, currentyMonth, currentyYear)
    const [noteDate, setNoteDate] = useState(fullDate)
    const [section, setSection] = useState("all")
    const [hasContent, setHasContent] = useState<boolean>(false)
    return (
        <View>
            <StatusBar barStyle={"dark-content"}/>
            <Modal animationIn={"slideInUp"}  style={{position: "absolute", bottom: 0, left: 0,marginBottom: 0, marginLeft: 0, width: "100%", height: "100%"}} isVisible={isModalVisible} backdropColor="trasparent" onBackdropPress={()=>{setModalVisible(false)}} >
                <View style={{ backgroundColor: "#FFFFFF", height: "auto", borderRadius: 20, position: "absolute", bottom: 0, width: "100%"}}>
                    
                        <View>
                            <View style={{marginTop: 10}}>
                                <Text style={{marginLeft: 20, marginRight: 20}}>Choose Your Filter</Text>
                                <Text>
                                
                                </Text>
                            </View>
                            <View>
                                <Text style={{marginLeft: 20, marginRight: 20}}>
                                    Colors
                                </Text>
                                
                                    <FlatList
                                       
                                        contentContainerStyle={style.containerList}
                                        data={COLORS}
                                        renderItem={({ item }) =>
                                           
                                                <Pressable onPress={()=>setColor(item)} style={[{backgroundColor: item},style.containerColors, item == color && {borderBlockColor: "black", borderWidth: 2}]}>
                                                </Pressable>    
                                            
                                            
                                        }
                                    ></FlatList>    
                               
                                
                            </View>
                            
                        </View>
                   
                </View>
            </Modal>
            <View style={[style.containerHeader]}>
                <Pressable style={[style.containerBtnSave]} onPress={()=>{router.back()}} >
                    <Text style={style.txtHeader}>
                        Salvar
                    </Text>
                </Pressable>
                <Pressable onPress={()=>{setModalVisible(true)}} style={style.paddingItens}>
                    <SimpleLineIcons name="options-vertical" size={26} />
                </Pressable>
            </View>
            <View style={style.containerScope}>
            
            <TextInput onChangeText={setNoteName} value={noteName} multiline={true} maxLength={20} placeholder="Sem título" placeholderTextColor={"#7A4ED9"} style={style.inputNoteName}/>
            <TextInput onChangeText={setNoteContent} value={noteContent} multiline={true} placeholder="Clique para continuar"/>
        </View>
        </View>
    )
}
