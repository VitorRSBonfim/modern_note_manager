import { View, Text, FlatList } from "react-native"
import { StyleSheet } from "react-native"
import { AllNotes } from "@/src/database/staticData/recents/recentsData"
import { useState } from "react"
import { useEffect } from "react"

/* 

if the year is older than the currenty year (Is older)
if the year isnt of this month (Is older)
if the date is older than the last 3 days (Is older)

case this compariment conditions then this note is new (Recent)


Note ID
Note Name
Note Content 
Note Date 
Note State (Recent deleted or Deleted Permenant)


*/

//** Getting the currenty Date */

const date = new Date()
const currentyDay = date.getDate()
const currentyMonth = date.getMonth()
const currentyYear = date.getFullYear()
const newObjectData = []
// const currentyDate = date.getDate()  + "/" + date.getDay() + "/" + date.getFullYear()



for ( let c = 0; c < AllNotes.length; c++) {
    if (true) {
        let tDay = AllNotes[c].noteDate.slice(0, 2)
        let tMonth = AllNotes[c].noteDate.slice(3, 5)
        let tYear = AllNotes[c].noteDate.slice(6, 10)
        

        if ( parseInt(tYear) === currentyYear && parseInt(tMonth) > currentyMonth - 3 && parseInt(tDay) > currentyDay - 3 ) {
            
            
            newObjectData.push({id: AllNotes[c].id, noteName: AllNotes[c].noteName, noteContent: AllNotes[c].noteContent, noteDate: AllNotes[c].noteDate, noteState: AllNotes[c].noteState})
            console.log(c)

        
        } 
        
    }
}

export const expNewObjectData = newObjectData



console.log(newObjectData)



export function RecentsNotes() {
    return (
        <View>
            <Text>
                RECENTNotes
            </Text>
            <FlatList
            data={expNewObjectData}
            renderItem={({item}) => <Text>{item.id}</Text>}
            keyExtractor={item => String(item.id)}
            horizontal
            />
        </View>
    )
}
