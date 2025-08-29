'use client'

import { CategoryListContextType, CategoryListType } from "@/types/loginForm";
import { createContext, useContext, useState } from "react";

const CategoryListContext = createContext<CategoryListContextType | null>(null)

export const CategoryListContextProvider = ({children}: {children: React.ReactNode}) => {
    const API_ENDPOINT = "https://www.themealdb.com/api/json/v1/1/";
    const [category, setCategory] = useState<CategoryListType[]>([])
    const [userCategory, setUserCategory] = useState<string>("none")

    async function getCategory() {
        try {
            const response = await fetch(`${API_ENDPOINT}categories.php`);
            const data = await response.json()
            setCategory(data.categories)
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
        } catch (error) {
            console.error(error);
        }
    }

    console.log(category);
    
    return(
        <CategoryListContext.Provider value={{category, setCategory, getCategory, userCategory, setUserCategory}}>
            {children}
        </CategoryListContext.Provider>
    )
}

export const useCategoryListContext = () => {
    return useContext(CategoryListContext)
}