import { createContext, useContext } from "react";
import {useState} from 'react'

export const Context = createContext();

export const StateProvider = ({children}) => {
    const [Activate, setActivate] = useState(false);

    const valor = {Activate,setActivate}

    return <Context.Provider value={valor}>{children}</Context.Provider>;
};

export const useCustomContext=()=>{
    const context = useContext(Context)
    if(!context){
        console.log("el contexto no esta dentro de un contextProvider")
    }
    return context
    
}
