'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import { MealType, MealValueType } from "@/types/meal";
import { CategoryListContextType } from "@/types/loginForm";
import { useCategoryListContext } from "@/context/CategoryList";
import Image from "next/image";
import { DataType } from "@/types/fetchDataTypes";
import { useData } from "@/context/Data";
import { useMealContext } from "@/context/MealContext";

const MealsCategory = () => {
    const {userCategory} = useCategoryListContext() as CategoryListContextType
    const {fetchData} = useData() as DataType
    const [showMeal, setShowMeal] = useState<MealType[]>([])
    const [showMore, setShowMore] = useState<number>(10)
    const {savedUserMealId, setSavedUserMealId} = useMealContext() as MealValueType

    const showMoreMeals = showMeal.slice(0, showMore)

    const handleSaveId = (id: string) => {
        setSavedUserMealId(id)
    }

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
                <Link onClick={() => handleSaveId(item.idMeal as string)} href={`/categories/${item.strMeal}`} key={item.idMeal}>
                    <Image className="w-full" src={item.strMealThumb} alt={item.strMeal} width={320} height={320} />
                    <h4>{item.strMeal}</h4>
                </Link>
            ))}
        </div>
        <button onClick={() => setShowMore(prev => prev + 10)}>Load More</button>
        </>
    )
}

export default MealsCategory