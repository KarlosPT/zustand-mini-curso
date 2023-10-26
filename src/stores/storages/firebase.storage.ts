import { StateStorage, createJSONStorage } from "zustand/middleware";

const firebaseUrl = 'https://zustand-storage-cpt-default-rtdb.firebaseio.com/zustand';

 const storageAPi: StateStorage = {
     getItem:async function (name: string): Promise<string | null> {
         try {
            const data = await fetch(`${firebaseUrl}/${name}.json`).then( res => res.json());
            console.log(data);
            return JSON.stringify(data);
         } catch (error) {
            throw error;
         }
     },
     setItem: async function (name: string, value: string): Promise<void> {
        const data = await fetch(`${firebaseUrl}/${name}.json`,{
            method:'PUT',
            body: value
        }).then( res => res.json());
        return;
     },
     removeItem: function (name: string): void {
         throw new Error("Function not implemented.");
     }
 }

 export const  firebaseStorage = createJSONStorage( () => storageAPi);