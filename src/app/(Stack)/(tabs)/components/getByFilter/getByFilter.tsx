import { View, Text, StatusBar } from "react-native"
import { FlatList } from "react-native"
import { AllNotes } from "@/src/database/staticData/recents/recentsData"
import { HomeScreen } from "../homeScreen/homeScreen"
import { StyleSheet } from "react-native"
import { Pressable } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useEffect, useState } from "react"
import { router } from "expo-router"
import { Init } from "./init"
import { SafeAreaView } from "react-native-safe-area-context"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Header } from "../header"
import { Filter } from "../filter"
import { Filters } from "../filters"
import { dbType } from "@/src/database/localDatabase/databaseOp/db"
import { useTabEffect } from "../../_layout"
import { DB } from "@/src/database/localDatabase/databaseOp/db"
import AsyncStorage from "@react-native-async-storage/async-storage"

type GetSecProps = {
    filter: String,
    FILTERS: object[],
    data: dbType[]
}

type AllNotesProps = {
    id: number,
}

 export type notesSec = {
    id: number,
    noteName: string,
    noteContent: string,
    noteDate: string,
    section: string,
    color: string
}


// const currentyDate = date.getDate()  + "/" + date.getDay() + "/" + date.getFullYear()

function GetSec({filter, FILTERS, data}: GetSecProps) {

    const [pressedId, setPressedId] = useState<number>()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [arraybySec, setArraySec] = useState<dbType[]>([])
    const [modalVisible, setModalVisible] = useState(false);
    const [noteArray, setNoteArray] =  useState<dbType[]>()
    const [idDel, setIdDel] = useState<number>()
    const [newObjectData, setNewObjectData] = useState<dbType[]>()

    
    if ( data.length > 0) {

       
        if (filter != "all") {

            let a = []
            for (let c = 0; c < data.length; c++) {
                    if (filter == data[c].section) {
                        a.push({id: data[c].id, noteName: data[c].noteName, noteContent: data[c].noteContent, noteDate: data[c].noteDate, color: data[c].color, seection: data[c].section});
                        
                    }
                    
                } 
           
            return (
                
                    <FlatList
                    data={a}
                    renderItem={({item}) => (
                        <View style={styles.container}>
                            <StatusBar barStyle={"dark-content"}/>
                            <Pressable onPress={() => {router.navigate("/(Stack)/newNote/newNote"), console.log("tasks")}}>
                            <View style={styles.containerNote}>
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
                    )}/>
                
            )
        } else if (filter == "all" ) {
            
            return (
                <SafeAreaProvider style={{height: "100%"}}>
                    
                    <SafeAreaView >
                    <FlatList
                        
                        data={data}
                        
                        renderItem={({ item }) =>
                            <Pressable onPress={() => { console.log("mostrar nota"), router.navigate("/(Stack)/newNote/newNote")}}>
                                <View style={[styles2.containerNote, { backgroundColor: item.color }]}>
                                    <Text style={styles2.txtNoteTittle}>
                                        {item.noteName}
                                    </Text>
                                    <Text style={styles2.txtNoteContent}>
                                        {item.noteContent}
                                    </Text>
                                    <View style={{ flex: 1, alignItems: "flex-end", justifyContent: "space-between", width: "100%", flexDirection: "row" }}>
                                        <Pressable style={styles2.containerPressableDelete} onPress={() => { setIdDel(item.id), deleteNote(item.id), fetchNote(),console.log(typeof (item.id)) }}>
                                            <MaterialCommunityIcons name="delete-empty-outline" size={20} color={item.color} />
                                        </Pressable>
                                        <Text style={{ marginRight: 4, color: "#FFFFFF", fontSize: 12 }}>{item.noteDate}</Text>
                                    </View>
                                </View>
                            </Pressable>
                        }
                        keyExtractor={item => String(item.id)}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles2.containerList}
                        
                    />
                    </SafeAreaView>

                    <FlatList
                    data={data}
                    renderItem={({item}) =>
                        <View style={{alignItems: "center"}}>
                            <Pressable onLongPress={()=> {setModalVisible(true), setIdDel(item.id)}} style={{ minHeight: 60, marginBottom: 10, marginTop: 10}} onPress={()=>{router.navigate("/newNote/newNote"), console.log(isOpen)}}>
                                <View  style={styles2.containerNote2}>
                                    <View style={{flexDirection: "row", maxWidth: "90%"}}>
                                        <View style={{width: 8,backgroundColor: item.color, borderTopLeftRadius: 10, borderBottomLeftRadius: 10}}>
        
                                        </View>
                                        <View style={styles2.containerContent}>
                                            <Text style={styles2.contentTittle}>
                                                {item.noteName}
                                            </Text>
                                            <Text style={styles2.contentSub}>
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
        </SafeAreaProvider>
            )
        }     
    } else if (FILTERS.length <= 0 && data.length == 0) {
        return (
            <SafeAreaProvider>
                <View style={{justifyContent: "center", alignItems: "center", height: "100%"}}>
                    <Text style={{fontSize: 60, color: "#524B63"}}>
                        精
                    </Text>
                    <Text style={{fontSize: 60, color: "#524B63"}}>
                        神
                    </Text>
                    <Text style={{fontWeight: "light", color: "#343239"}}>
                        No one note
                    </Text>
                </View>
            </SafeAreaProvider>
        )
    }
    
}


export function Components() {

    const [noteArray, setNoteArray] = useState<dbType[]>([])
    const [secLength, setLengthSec] = useState(0)
    const [FILTERS, setFILTER] = useState<object[]>([])
    const [dataBySec, setDataBySec] = useState<string[]>([])
    const [index, setIndex] = useState<number>(0)
    const [sec, setSec] = useState<String>('all')
    const db = DB()

    async function saveAllFilters() {
        try {
            await AsyncStorage.setItem(
                '@AllFilters:Filter',
                JSON.stringify(["all", "section01", "section02", "section03", "section04", "section05", "section07"])
            )
        } catch (error) {
            console.log(error)
        }
    }

    async function saveIndex() {
        try {
            await AsyncStorage.setItem(
                '@MyIndex:Index',
                String(sec)
            )
        } catch (error) {
            console.log(error)
        }
    }

    async function getIndex() {
        const result = await AsyncStorage.getItem('@MyIndex:Index') 
        if (result != null) {
            console.log("RESULATADO DO INDEX" + result)  
            setIndex(parseInt(result))
        } else (
            console.log("nadDDDDDDDDDDa")
        ) 
    }

    
    
    /*
    useTabEffect("/", () => {
        saveAllFilters()
        console.log("Notas Carregadas")
    });
    */
    saveAllFilters()

    async function getAllData() {
        const result = await AsyncStorage.getItem('@AllFilters:Filter') 
        if (result != null) {
            let resultJson = JSON.parse(result)
            setFILTER(resultJson)
            setLengthSec(resultJson.length)
            setFilter(resultJson)
            setFilterData(resultJson)  
            
            for (let c = 0; c < resultJson.length; c++) {
                console.log(resultJson[c])
                if (resultJson[c] === sec) {
                    setFilter(resultJson[c])
                    setSec(resultJson[c])
                    console.log("NEWWWWWWWWWWW" + sec)
                    console.log("KKKKKKKKKKKKKKKK" + sec)
                    saveIndex()
                } else {
                    setFilter(resultJson[0])
                }
            }
            
        } else (
            console.log("nada")
        )

        
         
    }

    async function fetchNote() {
        try {
            const response = await db.fetchNotes()
            
            
            if (response != null) {
                setNoteArray(response)  
            }
            
        } catch (error) {
            console.log(error)
        }
        
    }

    function verifSection(){
        for(let c = 0; 0 < noteArray.length; c++) {
            for (let c = 0; c < secLength; c++) {
                
            }
        }
    }

   
    useTabEffect("/", () => {
        fetchNote()
       
    });

    useTabEffect("/", () => {
        getAllData()
       
    });
    
    saveIndex()




    useTabEffect("/", () => {
        getIndex()
       
    });

    const [filterData, setFilterData] = useState([]) // FROM ASYNC STORAGE
    const [filter, setFilter] = useState(sec)
      

    
    
    
    
    return (
        
        <SafeAreaView style={{height: "100%"}}>
            <StatusBar barStyle={"dark-content"}/>
            <Header/>
            <Filters filters={filterData} filter={filter} onChange={setFilter}/>
            <GetSec FILTERS={filterData} filter={filter} data={noteArray}/>
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
        marginTop: 10,
        borderRadius: 10,
        marginBottom: 10,
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
    }
})

const styles2 = StyleSheet.create({
    containerList: {
        gap: 8,
        paddingLeft: 18,
        paddingRight: 18,
        marginBottom: 20
    },
    containerNote: {
        minWidth: 200,
        minHeight: 160,
        maxWidth: 200,
        maxHeight: 160,
        borderRadius: 10,
        alignItems: "flex-start",
        marginLeft: 2,
        marginRight: 2,
        backgroundColor: "blue",
    },
    txtTittle: {
        marginTop: 8,
        marginLeft: 20,
        marginBottom: 8,
        fontSize: 14
    },
    txtNoteTittle: {
        color: "#FFFFFF",
        fontSize: 20,
        fontFamily: "Roboto",
        marginLeft: 4
    },
    txtNoteContent: {
        color: "#FFFFFF",
        fontSize: 12,
        fontFamily: "Roboto",
        marginLeft: 4
    },
    containerPressableDelete: {
        backgroundColor: "#FFFFFF",
        padding: 12,
        borderRadius: 100,
        marginLeft: 4,
        marginBottom: 4
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
    },
    container: {
        alignItems: "center",
        
    },
    containerNote2: {
        minHeight: 80,
        width: "90%",
        backgroundColor: "#FFFFFF",
        
        borderRadius: 10,
        
        flexDirection: "row",
        justifyContent: "space-between",
    },
}) 





/*

IMPORTANT

useTabEffect("/", () => {
    getAllData()
    console.log("Notas Carregadas")
});


*/
