'use client'

import { useUserContext } from "@/context/UserName"
import { UserNameType } from "@/types/userName"

const UserName = () => {
    const {savedUserName} = useUserContext() as UserNameType

    return savedUserName
}

export default UserName