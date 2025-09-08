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
        <div className="grid grid-cols-2 gap-7">
            {showMoreMeals.map(item => (
                <Link className="h-full flex flex-row-reverse justify-between gap-5 bg-white border-1 border-[#9ac2aa] rounded-2xl overflow-hidden" 
                        onClick={() => handleSaveId(item.idMeal as string)} 
                        href={`/categories/${item.strMeal}`} 
                        key={item.idMeal}
                >
                    <Image className="w-50" 
                            src={item.strMealThumb}
                            alt={item.strMeal} 
                            width={320} height={320} 
                    />
                    <div className="w-full p-3 mt-2 flex flex-col justify-center gap-5">
                        <h4 className="text-xl text-center ">
                                                {item.strMeal}
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