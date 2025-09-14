'use client'

import { useCategoryListContext } from "@/context/CategoryList"
import { UserNameType } from "@/types/userName"
import { CategoryListContextType } from "@/types/loginForm"
import { useEffect } from "react"
import { useUserContext } from "@/context/UserName"
import CategorySelect from "../CategorySelect"

const LoginForm = () => {
    const {getCategory} = useCategoryListContext() as CategoryListContextType
    const {userName, setUserName, setSavedUserName} = useUserContext() as UserNameType

    const handleSignIn = (e:React.FormEvent) => {
        e.preventDefault()
        setSavedUserName(userName)
    }

    useEffect(() => {
        getCategory()
    }, [])

    return(
        <div className="w-full h-full p-5 flex text-[#2C2D35] bg-gradient-to-r from-[#040817] to-[#081130]">
            <form className="w-1/2 m-auto p-15 flex flex-col gap-5 bg-white rounded max-lg:w-4/5 max-sm:w-full max-sm:p-10">
                <h3 className="text-2xl text-[#5a598d] font-bold capitalize">Login to your account</h3>
                <input className="p-4 flex flex-col border border-[#040817] rounded" onChange={(e) => setUserName(e.target.value)} value={userName} type="text" id="name" placeholder="Name" required/>
                <fieldset className="p-4 border border-[#040817] rounded">
                    <label htmlFor="category">Choose category:</label>
                    <CategorySelect/>
                </fieldset>
                <button className="p-3 text-white bg-[#040817] cursor-pointer rounded" onClick={handleSignIn}>Login</button>
            </form>
        </div>
    )
}

export default LoginForm