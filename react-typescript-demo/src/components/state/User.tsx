import {useState} from 'react';

type AuthUser={
    name:string,
    email:string
}
export const User=()=>{
    const [user,setUser]=useState(null as AuthUser | null);
    const handleLogin=()=>{
        setUser({name:"venkatesh",email:"venky12@gmail.com"})
    }
    const handleLogout=()=>{
        setUser(null)
    }
    return <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User is {user?`logged in ${user.name}`:"not logged in"}</div>
    </div>
    
}