import { FlatList, View, Text } from "react-native";
import { Filter } from "../filter";
import { styles } from "./styles";
import { FilterProps } from "./filters.t";
import { AntDesign } from "@expo/vector-icons";
import { Pressable } from "react-native";

export function Filters({ filters, filter, onChange } : FilterProps ) {
    return (
        <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", marginLeft: 20}}>
            <Pressable onPress={()=>{console.log("Abrir nova nota")}}>
                <View style={{backgroundColor: "#FFFFFF", justifyContent: "center", borderRadius: 100}}>
                    <AntDesign name="plus" size={24} color={"#7A4ED9"}/>
                </View>
            </Pressable>
            <FlatList
            data={filters}
            keyExtractor={item => item}
            renderItem={({item}) => <Filter filter={item} selected={item === filter} onPress={() => {onChange(item)}}  />}
            horizontal
            style={styles.list}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.content}
            >
            </FlatList>
        </View>
    )
}
