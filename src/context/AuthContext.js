import { createContext, useEffect, useReducer, useState } from "react"
import { AuthReducer } from "./AuthReducer";
import { LoginFail, LoginStart, LoginSuccess } from "./AuthActions";
import { useNavigate } from "react-router-dom";

const INITAL_STATE  = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false
}


export const AuthContext = createContext();


export const AuthContextProvider = ({children})=>{

    const [state, dispatch] = useReducer(AuthReducer, INITAL_STATE)
    const [variable, setVariable] = useState("This is a variable")
    

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.user))
    },[state.user])


    return <AuthContext.Provider value={{user:state.user, isFetching:state.isFetching, error: state.error, dispatch, variable}}>
        {children}
    </AuthContext.Provider>
}

