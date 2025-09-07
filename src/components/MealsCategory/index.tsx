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
    const {setSavedUserMealId} = useMealContext() as MealValueType

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
        <div className="grid grid-cols-4 gap-7 max-lg:grid-cols-3 max-sm:grid-cols-2 ">
            {showMoreMeals.map(item => (
                <Link className="h-full p-3 flex flex-col justify-between" 
                        onClick={() => handleSaveId(item.idMeal as string)} 
                        href={`/categories/${item.strMeal}`} 
                        key={item.idMeal}
                >
                    <Image className="w-full" 
                            src={item.strMealThumb} 
                            alt={item.strMeal} 
                            width={320} height={320} 
                    />
                    <div className="mt-2 flex flex-col flex-grow justify-between">
                        <h4 className="font-semibold">
                                                {item.strMeal.length > 25 
                                                ? `${item.strMeal.slice(0, 25)}...` 
                                                : item.strMeal}
                        </h4>
                        <p className="mt-2 p-2 text-center text-white bg-[#598D66] duration-100 ease-in hover:bg-[#6caa7b]">
                            Read More
                        </p>
                    </div>
                </Link>
            ))}
        </div>
        <button onClick={() => setShowMore(prev => prev + 10)}>Load More</button>
        </>
    )
}

export default MealsCategory