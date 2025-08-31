'use client'

import { useEffect, useState } from "react";
import { MealType } from "@/types/meal";

const Meal = async () => {
    const [showMeal, setShowMeal] = useState<MealType[]>([])

    try {
        const response = await fetch(`www.themealdb.com/api/json/v1/1/lookup.php?i=52772`);
        const data = await response.json()
        setShowMeal(data)
    } catch (error) {
        console.log(error);
        
    }

    useEffect(() => {

        console.log(showMeal);
    }, [])

    

    return(
        <></>
    )
}

export default Meal