import { View, Text } from "react-native"
import { Pressable } from "react-native"
import { style } from "../styles"
import { SimpleLineIcons } from "@expo/vector-icons"
import { Modal } from "react-native"
import { useState } from "react"
export function HeaderNew() {
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    return (
        <View style={style.containerHeader}>
             <Modal
             animationType="slide"
             transparent={true}
             visible={modalVisible}
             onRequestClose={() => {
             setModalVisible(!modalVisible);
            }}>
                <View style={{position: "absolute", height: 200, backgroundColor: "red", bottom: 0, width: "100%"}} >
                    <Pressable>
                        <Text onPress={()=>{setModalVisible(false)}}>
                            Close MODAL
                        </Text>
                    </Pressable>
                </View>

             </Modal>
            <Pressable style={style.containerBtnSave}>
                <Text style={style.txtHeader}>
                    Save
                </Text>
            </Pressable>
            <Pressable onPress={()=>{setModalVisible(true)}}>
                <SimpleLineIcons name="options-vertical" size={20}/>
            </Pressable>
        </View>
    )
}


