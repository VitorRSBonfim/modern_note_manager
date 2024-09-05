import { StyleSheet  } from "react-native";
export const style = StyleSheet.create({
    containerHeader: {
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        paddingLeft: 20
    },
    containerBtnSave: {
        backgroundColor: "#7A4ED9",
        paddingLeft: 16, 
        paddingRight: 16,
        paddingBottom: 4,
        paddingTop: 4,
        alignItems: "center",
        borderRadius: 50,
        marginRight: 10
    },
    txtHeader: {
        fontSize: 16,
        color: "#FFFFFF",
    },
    inputNoteName: {
        fontSize: 40,
        color: "#7A4ED9"
    }, 
    returnBtn: {
        padding: 12,
        paddingLeft: 10
    },
    containerSideRight: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    containerScope: {
        marginLeft: 20,
        backgroundColor: "red"
    },
    pressableContainer: {
        padding: 20
    }
})
