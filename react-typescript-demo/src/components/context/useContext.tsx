import { createContext } from "react";

export const AuthUserContext = createContext<AuthUser | null>(null);
type AuthUserContextProps = {
    children?: React.ReactNode
}
export type AuthUser={
    name:string;
    email:string;
};
export const AuthUserContextProvider = (props:AuthUserContextProps) => {
    const authUser:AuthUser={
        name:"John Doe",
        email:"johndoe@gmail.com"
    }
    return (
        <AuthUserContext.Provider value={authUser}>
            {props.children}
        </AuthUserContext.Provider>
    )
}