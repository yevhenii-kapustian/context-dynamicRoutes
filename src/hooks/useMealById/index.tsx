'use client'

import { useCategoryListContext } from "@/context/CategoryList"
import { useData } from "@/context/Data"
import { DataType } from "@/types/fetchDataTypes"
import { CategoryListContextType } from "@/types/loginForm"
import { MealType } from "@/types/meal"
import { useEffect, useState } from "react"

const useMealById = (mealId: string) => {
    const {fetchData} = useData() as DataType
    const [toShowUserMeal, setToShowUserMeal] = useState<MealType | null>(null)
    const {userCategory} = useCategoryListContext() as CategoryListContextType
    console.log(userCategory);
    
    
     useEffect(() => {
        const getMeal = async () => {
            const data = await fetchData<{meals: MealType[]}>({url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`})
            setToShowUserMeal(data.meals[0])
        }
    
        getMeal()
    }, [])

    return toShowUserMeal
}

export default useMealById