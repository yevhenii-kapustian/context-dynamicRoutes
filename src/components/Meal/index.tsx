'use client'

import { useEffect, useState } from "react";
import { MealType } from "@/types/meal";
import { CategoryListContextType } from "@/types/loginForm";
import { useCategoryListContext } from "@/context/CategoryList";
import Image from "next/image";

const Meal = () => {
    const {userCategory} = useCategoryListContext() as CategoryListContextType
    const [showMeal, setShowMeal] = useState<MealType[]>([])

    const fetchMeal = async () => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${userCategory}`);
            const data = await response.json()
            setShowMeal(data.meals)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMeal()
    }, [])

    return(
        <>
        {showMeal.map(item => (
            <div key={item.idMeal}>
                <Image src={item.strMealThumb} alt={item.strMeal} width={500} height={500} />
                <h4>{item.strMeal}</h4>
            </div>
        ))}
        </>
    )
}

export default Meal