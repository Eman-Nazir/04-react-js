import { createContext,useState } from "react";

const  AuthConText = createContext()

const AuthProvider = ({children}) =>{
    const[isLoggedIn,setIsLoggedIn] = useState(false)


    const login = ()=>{
         setIsLoggedIn(true)
         console.log("User is Login");
         
    }

     const logout = ()=>{
         setIsLoggedIn(false)
         console.log("User is Logout");

    }

    return  (
        <AuthConText.Provider value={{isLoggedIn,login,logout}}>
             {children}
        </AuthConText.Provider>
    )
}

export {AuthProvider ,AuthConText}  