'use client'

import { useCategoryListContext } from "@/context/CategoryList"
import { UserNameType } from "@/types/userName"
import { CategoryListContextType } from "@/types/loginForm"
import { useEffect } from "react"
import { useUserContext } from "@/context/UserName"

const LoginForm = () => {
    const {getCategory, category, userCategory, setUserCategory} = useCategoryListContext() as CategoryListContextType
    const {userName, setUserName, setSavedUserName} = useUserContext() as UserNameType

    const handleSignIn = (e:React.FormEvent) => {
        e.preventDefault()
        if (userCategory === "none") return
        setSavedUserName(userName)
    }

    useEffect(() => {
        getCategory()
    }, [])

    return(
        <form className="w-1/2 m-auto p-3 flex flex-col gap-3 border-2 border-[#598D66] rounded-xl">
            <h3 className="text-xl text-center">Login</h3>
            <fieldset className="p-2 flex flex-col border border-[#598D66] rounded">
                <label htmlFor="name">Enter your name:</label>
                <input onChange={(e) => setUserName(e.target.value)} value={userName} type="text" id="name" placeholder="Name" required/>
            </fieldset>
            <fieldset className="p-2 border border-[#598D66] rounded">
                <label htmlFor="category">Choose category:</label>
                <select onChange={(e) => setUserCategory(e.target.value)} className="w-full p-1 border-b" name="category" id="category" required>
                    <option value="none">None</option>
                    {category.map((item, index) => <option key={index} value={item.strCategory}>{item.strCategory}</option> )}
                </select>
            </fieldset>
            <button className="border" onClick={handleSignIn}>Sign in</button>
        </form>
    )
}

export default LoginForm