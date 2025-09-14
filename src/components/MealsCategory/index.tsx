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
        <div className="grid grid-cols-3 gap-7 max-sm:grid-cols-2">
            {showMoreMeals.map(item => (
                <Link className="h-full justify-between gap-5 bg-white shadow-lg rounded-2xl overflow-hidden" 
                        onClick={() => handleSaveId(item.idMeal as string)} 
                        href={`/categories/${item.strMeal}`} 
                        key={item.idMeal}
                >
                    <Image className="w-full"
                            src={item.strMealThumb}
                            alt={item.strMeal} 
                            width={320} height={320} 
                    />
                    <div className="w-full p-6 mt-2 flex flex-col justify-center gap-3 max-sm:p-4">
                        <h4 className="text-xl font-bold capitalize max-md:text-lg max-sm:text-base">
                                                {item.strMeal}
                        </h4>
                        <p className="w-fit mt-2 py-3 px-5 text-[14px] text-center bg-[#FED84C] duration-100 ease-in hover:bg-[#6caa7b] rounded max-sm:text-xs">
                            Read More
                        </p>
                    </div>
                </Link>
            ))}
        </div>
        {showMeal.length > showMore && <button onClick={() => setShowMore(prev => prev + 10)}>Load More</button> }
        </>
    )
}

export default MealsCategory