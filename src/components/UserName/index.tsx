'use client'

import { useUserContext } from "@/context/UserName"
import { UserNameType } from "@/types/userName"

const UserName = () => {
    const {savedUserName} = useUserContext() as UserNameType

    return <p>{savedUserName}</p>
}

export default UserName