'use client'

import { useUserContext } from "@/context/UserName"
import { UserNameType } from "@/types/userName"
import LoginForm from "../LoginForm"

const LoginFormWrapper = ({children}: {children: React.ReactNode}) => {
    const {savedUserName} = useUserContext() as UserNameType
    
    return(
        <>
        {!savedUserName ? <LoginForm/> : children}
        </>
    )
}

export default LoginFormWrapper