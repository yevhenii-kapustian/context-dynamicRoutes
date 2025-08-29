'use client'

import { useUserContext } from "@/context/UserName"
import { UserNameType } from "@/types/userName"

const UserName = () => {
    const {userName} = useUserContext() as UserNameType

    return <p>{userName}</p>
}

export default UserName