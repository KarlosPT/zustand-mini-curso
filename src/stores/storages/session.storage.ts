import { StateStorage, createJSONStorage } from "zustand/middleware";

 const storageApi: StateStorage = {
     getItem: function (name: string): string | Promise<string | null> | null {
         const data = sessionStorage.getItem(name);
         return data;
     },
     setItem: function (name: string, value: string): void | Promise<void> {
         sessionStorage.setItem(name, value);
     },
     removeItem: function (name: string): void {
         throw new Error("Function not implemented.");
     }
 }

 export const  customSessionStorage = createJSONStorage( () => storageApi);