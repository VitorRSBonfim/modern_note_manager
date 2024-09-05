import { View, Text } from "react-native"
import { Pressable } from "react-native"
import { style } from "../styles"
import { AntDesign, MaterialIcons, Octicons, SimpleLineIcons } from "@expo/vector-icons"
import { Modal } from "react-native"
import { useState } from "react"
import { Select } from "native-base"
import { CheckIcon } from "native-base"
import { Box } from "native-base"
import { Center } from "native-base"
import React from "react"
import { NativeBaseProvider } from "native-base"
import { Picker } from "@react-native-picker/picker"
import { PresenceTransition } from "native-base"
export const isPressed = false
export function HeaderNew() {
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const [service, setService] = useState("")
    return (
        <View style={style.containerHeader}>
             
        </View>
    )
}


