import { Picker } from "@react-native-picker/picker";
import { FILTERS } from "@/src/database/staticData/filter/filterData";

function Filter() {
    for (let c = 0; c < FILTERS.length; c++) {
        return (
            <Picker.Item label={FILTERS[c]} value={FILTERS[c]} />
        )
    }
}




export function GetFilters(){

    

        return (
            
            <Picker.Item label={"dd"} value={"dd"} />
        )
            
        
   
}
