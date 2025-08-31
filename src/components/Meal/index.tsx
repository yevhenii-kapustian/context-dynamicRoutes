'use client'

import { useEffect, useState } from "react";
import { MealType } from "@/types/meal";
import { CategoryListContextType } from "@/types/loginForm";
import { useCategoryListContext } from "@/context/CategoryList";
import Image from "next/image";
import { DataType } from "@/types/fetchDataTypes";
import { useData } from "@/context/Data";

const Meal = () => {
    const {userCategory} = useCategoryListContext() as CategoryListContextType
    const {fetchData} = useData() as DataType
    const [showMeal, setShowMeal] = useState<MealType[]>([])

    useEffect(() => {
        const getMeals = async () => {
            const data = await fetchData<{meals:MealType[]}>({url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${userCategory}`})
            setShowMeal(data.meals)
        }
        getMeals()
    }, [userCategory])

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