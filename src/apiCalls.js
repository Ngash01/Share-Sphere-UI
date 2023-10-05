import axios from "axios"
import { LoginFail, LoginStart, LoginSuccess } from "./context/AuthActions"


export const LoginCall = async(userCredentials, dispatch)=>{
    dispatch(LoginStart())

    try{
        const res = await axios.post("https://share-sphere.onrender.com/api/auth/login", userCredentials)
        dispatch(LoginSuccess(res.data))
        console.log(res.data)
        

    }catch(err){
        dispatch(LoginFail(err))
        console.log(err)
    }
}


export const RegisterCall = async(userCredentials, dispatch)=>{

    dispatch(LoginStart())

    try{
        const res = await axios.post("https://share-sphere.onrender.com/api/auth/register", userCredentials)
        dispatch(LoginSuccess(res.data))
        console.log(res.data)
        
    }catch(err){
        dispatch(LoginFail(err))
    }

}
