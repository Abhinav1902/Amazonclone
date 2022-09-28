import { createContext ,useContext,useReducer} from "react";

//this is a data layer

export const StateContext=createContext();


//build a provider
export const StateProvider=({reducer ,initialState,children})=>(
    <StateContext.Provider value={useReducer(initialState,reducer)}>
        {children}
    </StateContext.Provider>
);
