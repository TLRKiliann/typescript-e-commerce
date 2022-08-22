import React from 'react';
import { createContext, ReactNode, useContext, useState } from "react";
//import axios from "axios";

type Props = {
    children: ReactNode;
}

type AuthContextProps = {
    usrEmail: string;
    setUsrEmail: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    switchLogin: boolean;
    setSwitchLogin: React.Dispatch<React.SetStateAction<boolean>>;
    toggle: () => void;
    eraseAll: () => void;
}

const AuthContext = createContext({} as AuthContextProps);

export function useAuthLogin() {
    return useContext(AuthContext)
};

export function AuthProvider({ children }: Props) {

    const [switchLogin, setSwitchLogin] = useState(true)
    const [email, setEmail] = useState("")
    const [usrEmail, setUsrEmail] = useState("")

    const toggle = () => {
        setSwitchLogin(!switchLogin)
        //setUsrEmail(email)
    }

    const eraseAll = () => {
        setUsrEmail("")
    }

    //console.log("my setEmail", setEmail)

    return (
        <AuthContext.Provider value={{
            usrEmail,
            setUsrEmail,
            email,
            setEmail,
            switchLogin,
            setSwitchLogin,
            toggle,
            eraseAll
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
