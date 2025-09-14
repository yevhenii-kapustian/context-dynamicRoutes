'use client'

import { createContext, useContext, useEffect, useState } from "react";
import { MealType, MealValueType } from "@/types/meal";

const MealContext = createContext<MealValueType | null>(null)

export const MealContextProvider = ({children}: {children: React.ReactNode}) => {
    const [savedUserMeal, setSavedUserMeal] = useState<MealType[]>([])
    const [savedUserMealId, setSavedUserMealId] = useState<string>("")  
    
    const addMeal = (meal: MealType) => {
        setSavedUserMeal(prev => {
            const existMeal = prev.find(m => m.idMeal === meal.idMeal);
            if (existMeal) return prev;
            return [...prev, meal];
        });
    };

    const removeMeal = (id: string) => {
        setSavedUserMeal(prev => prev.filter(meal => meal.idMeal !== id))
    }

    const resetMeals = () => {
        setSavedUserMeal([])
    }

    useEffect(() => {
        const saved = localStorage.getItem("savedUserMeal");
        if (saved) setSavedUserMeal(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem("savedUserMeal", JSON.stringify(savedUserMeal));
    }, [savedUserMeal]);

    return(
        <MealContext.Provider value={{savedUserMeal, setSavedUserMeal, addMeal, removeMeal, resetMeals, savedUserMealId, setSavedUserMealId}}>
            {children}
        </MealContext.Provider>
    )
}

export const useMealContext = () => {
    return useContext(MealContext)
}