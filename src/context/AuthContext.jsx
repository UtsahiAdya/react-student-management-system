import { useContext, useState } from "react";

export const AuthContext=useContext();

function AuthProvider({children}){
const[user, setUser]=useState("");

function login(){
    setUser("Adya Utsahi")
}

function logout(){
    setUser(" ");
}

return(
    <AuthProvider>
        value={{user,
            login,
            logout
        }}
        {children}
    </AuthProvider>
)
}

export default AuthContext;