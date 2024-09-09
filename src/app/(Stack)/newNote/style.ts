import { StyleSheet  } from "react-native";
export const style = StyleSheet.create({
    containerHeader: {
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20
    },
    containerBtnSave: {
        backgroundColor: "#7A4ED9",
        paddingLeft: 16, 
        paddingRight: 16,
        height: 26,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        flexDirection: "row",
      
        
    },
    txtHeader: {
        fontSize: 16,
        color: "#FFFFFF",
    },
    inputNoteName: {
        fontSize: 40,
        color: "#7A4ED9",
        
    },
    containerScope: {
        marginLeft: 20,
        marginRight: 20
    },
    paddingItens: {
        marginLeft: 10,
    },
    containerColors: {
        marginLeft: 20,
        marginRight: 20,
        minHeight: 80,
        minWidth: 80,
        width: "auto",
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 20
    },
    containerList: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap"
    }
})
