import {Login} from "./Login"
import {useAuth} from "./useAuth"
import {ReactNode} from "react"

interface PrivateProps{
    children:ReactNode
}

export const Private=({children}:PrivateProps)=>{
    const auth=useAuth()

    if(!auth.user){
        return <Login/>
    }

    return <>{children}</>
}