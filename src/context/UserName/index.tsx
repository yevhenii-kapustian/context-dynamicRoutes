'use client'

import { createContext, useContext, useEffect, useState } from "react";
import { UserNameType } from "@/types/userName";

const UserContext = createContext<UserNameType | null>(null)

export const UserNameContextProvider = ({children}: {children: React.ReactNode}) => {
    const [userName, setUserName] = useState<string>("")
    const [savedUserName, setSavedUserName] = useState<string>("")

    useEffect(() => {
        const storedName = localStorage.getItem("userName")
        if (storedName) setSavedUserName(storedName)
    }, [])

    useEffect(() => {
        if (savedUserName) {
            localStorage.setItem("userName", savedUserName)
        }
    }, [savedUserName])

    return(
        <UserContext.Provider value={{userName, setUserName, savedUserName, setSavedUserName}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext)
}