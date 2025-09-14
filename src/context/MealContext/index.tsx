'use client'

import { createContext, useContext, useEffect, useState } from "react";
import { MealType, MealValueType } from "@/types/meal";

const MealContext = createContext<MealValueType | null>(null)

export const MealContextProvider = ({children}: {children: React.ReactNode}) => {
    const [savedUserMeal, setSavedUserMeal] = useState<MealType[]>([])
    const [savedUserMealId, setSavedUserMealId] = useState<string>("")  
    
    const addMeal = (meal: MealType) => {
        setSavedUserMeal(prev => {
            if (prev.find(m => m.idMeal === meal.idMeal)) return prev;
            return [...prev, meal];
        });
    };

    const removeMeal = (id: string) => {
        setSavedUserMeal(prev => prev.filter(meal => meal.idMeal !== id))
    }

   useEffect(() => {
        const savedMeals = localStorage.getItem("savedUserMeal")
        if (savedMeals) setSavedUserMeal(JSON.parse(savedMeals))

        const savedMealId = localStorage.getItem("savedMealId")
        if (savedMealId) setSavedUserMealId(savedMealId)
    }, [])

    useEffect(() => {
        localStorage.setItem("savedUserMeal", JSON.stringify(savedUserMeal))
    }, [savedUserMeal])

    useEffect(() => {
        if (savedUserMealId) localStorage.setItem("savedMealId", savedUserMealId)
    }, [savedUserMealId])

    return(
        <MealContext.Provider value={{savedUserMeal, setSavedUserMeal, addMeal, removeMeal, savedUserMealId, setSavedUserMealId}}>
            {children}
        </MealContext.Provider>
    )
}

export const useMealContext = () => {
    return useContext(MealContext)
}