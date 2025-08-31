'use client'

import { CategoryListContextType, CategoryListType } from "@/types/loginForm";
import { createContext, useContext, useState } from "react";
import { DataType } from "@/types/fetchDataTypes";
import { useData } from "../Data";

const CategoryListContext = createContext<CategoryListContextType | null>(null)

export const CategoryListContextProvider = ({children}: {children: React.ReactNode}) => {
    const [category, setCategory] = useState<CategoryListType[]>([])
    const [userCategory, setUserCategory] = useState<string>("none")
    const {fetchData} = useData() as DataType

    async function getCategory() {
        try {
            const data = await fetchData<{categories: CategoryListType[]}>({url: "https://www.themealdb.com/api/json/v1/1/categories.php"});
            setCategory(data.categories)
        } catch (error) {
            console.error(error);
        }
    }
    
    return(
        <CategoryListContext.Provider value={{category, setCategory, getCategory, userCategory, setUserCategory}}>
            {children}
        </CategoryListContext.Provider>
    )
}

export const useCategoryListContext = () => {
    return useContext(CategoryListContext)
}