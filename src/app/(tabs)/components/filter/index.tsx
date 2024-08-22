
import { Pressable, PressableProps, Text } from "react-native";

import { FilterProps } from "./filter.t";
import { styles } from "./style";
import { useState } from "react";



export function Filter({ filter, selected ,...rest} : PressableProps & FilterProps ) {

    return (
        <Pressable style={[styles.pressable, selected && styles.pressabledSelected]} {...rest}>
            <Text style={[styles.text, selected && styles.txtSelected ]} >{filter}</Text> 
        </Pressable>
    )
}

/**colocar componente de filtro aqui */
