'use client'

import { useEffect, useState } from "react";
import { MealType } from "@/types/meal";
import { CategoryListContextType } from "@/types/loginForm";
import { useCategoryListContext } from "@/context/CategoryList";
import Image from "next/image";
import { DataType } from "@/types/fetchDataTypes";
import { useData } from "@/context/Data";

const MealsCategory = () => {
    const {userCategory} = useCategoryListContext() as CategoryListContextType
    const {fetchData} = useData() as DataType
    const [showMeal, setShowMeal] = useState<MealType[]>([])
    const [showMore, setShowMore] = useState<number>(10)

    const showMoreMeals = showMeal.slice(0, showMore)

    useEffect(() => {
        const getMeals = async () => {
            const data = await fetchData<{meals:MealType[]}>({url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${userCategory}`})
            setShowMeal(data.meals)
            setShowMore(10)
        }
        getMeals()
    }, [userCategory])

    return(
        <>
        <div className="grid grid-cols-4 ">
            {showMoreMeals.map(item => (
                <div key={item.idMeal}>
                    <Image className="w-full" src={item.strMealThumb} alt={item.strMeal} width={320} height={320} />
                    <h4>{item.strMeal}</h4>
                </div>
            ))}
        </div>
        <button onClick={() => setShowMore(prev => prev + 10)}>Load More</button>
        </>
    )
}

export default MealsCategory