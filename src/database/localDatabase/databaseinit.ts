import { type SQLiteDatabase } from "expo-sqlite"
import { deleteDatabaseAsync } from "expo-sqlite"

export async function initDb(database: SQLiteDatabase) {
    await database.execAsync(`

        CREATE TABLE IF NOT EXISTS nota (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            noteName TEXT NOT NULL,
            noteContent TEXT NOT NULL,
            noteDate TEXT NOT NULL,
            section TEXT NOT NULL, 
            color TEXT NOT NULL
        );


    `)
}