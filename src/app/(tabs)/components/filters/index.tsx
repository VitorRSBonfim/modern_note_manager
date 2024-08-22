import { FlatList } from "react-native";
import { Filter } from "../filter";
import { styles } from "./styles";
import { FilterProps } from "./filters.t";

export function Filters({ filters, filter, onChange } : FilterProps ) {
    return (
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
    )
}
