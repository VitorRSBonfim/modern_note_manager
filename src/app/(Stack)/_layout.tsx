import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { initDb } from "@/src/database/localDatabase/databaseinit";
import { SQLiteProvider } from "expo-sqlite";


export default function Layout(){
    return (
      
        <SQLiteProvider databaseName="nota" onInit={initDb}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                <Stack.Screen name="newNote/newNote" options={{headerShown: false}}/>
            </Stack>     
        </SQLiteProvider>
         
            
            
       
    )
}
