import {createContext} from "react";
import {theme} from "./theme";
type ThemeContextProps={
    childeren?:React.ReactNode
}
export const ThemeContext = createContext(theme);

export const ThemeContextProvider = (props:ThemeContextProps) => {
    return (
        <ThemeContext.Provider value={theme}>
            {props.childeren}
        </ThemeContext.Provider>
    )
}