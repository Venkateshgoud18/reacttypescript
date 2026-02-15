import React from "react";
import { Button } from "./Button";

export const Input=(props:React.ComponentProps<typeof Button>)=>{
    return (
       <><h1>Input</h1><h2>Props: {JSON.stringify(props)}</h2></>
    )
}