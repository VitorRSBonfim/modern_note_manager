import { useSQLiteContext } from "expo-sqlite";
export type dbType = {
    id: number, noteName: string, noteContent: string, noteDate: string, section: string, color: string  
}


export  function DB() {
    const database = useSQLiteContext()

    async function fetchNotes(){
        try {
            const query = "SELECT * FROM nota "
            const result = await database.getAllAsync(query)
            console.log("Resultado da busca" +  result[0])
            return result
        } catch (error) {
            console.log(error)
        } 
    }

    async function insertNotes(noteName: string, noteContent: string, noteDate: string, section: string, color: string) {
        const statement = await database.prepareAsync(`INSERT INTO nota (noteName, noteContent, noteDate, section, color) values ($noteName, $noteContent, $noteDate, $section, $color)`)
        try {
            
            let result = await statement.executeAsync({$noteName: noteName, $noteContent: noteContent, $noteDate: noteDate, $section: section, $color: color})
            console.log(result)
            const insertedRowId = result.lastInsertRowId.toLocaleString()
            return { insertedRowId }
            
        } catch (error) {
            console.log(error)
        } 
    }

    async function deleteNote(id: number) {
        const query = await database.prepareAsync('DELETE FROM nota WHERE id == $id')
        try {
            let result = await query.executeAsync({$id: id})
            console.log(result)
        } catch (error) {
            await query.finalizeAsync()
        }
    }

    return { fetchNotes, insertNotes, deleteNote}

}

