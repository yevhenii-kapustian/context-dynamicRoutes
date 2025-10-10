'use client'

import { useCategoryListContext } from "@/context/CategoryList"
import { useData } from "@/context/Data"
import { DataType } from "@/types/fetchDataTypes"
import { CategoryListContextType } from "@/types/loginForm"
import { MealType, MealValueType } from "@/types/meal"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useMealContext } from "@/context/MealContext"
import UserName from "../UserName"

const UserCategoryList = () => {
   const {fetchData} = useData() as DataType
    const [showMeal, setShowMeal] = useState<MealType[]>([])
    const {userCategory} = useCategoryListContext() as CategoryListContextType
    const {setSavedUserMealId} = useMealContext() as MealValueType

    const handleSaveId = (id: string) => {
        setSavedUserMealId(id)
    }

    const toShowMeals = showMeal.slice(0, 3)

     useEffect(() => {
            const getMeals = async () => {
                const data = await fetchData<{meals:MealType[]}>({url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${userCategory}`})
                setShowMeal(data.meals)
            }
            getMeals()
        }, [userCategory])

    return(
        <div className="py-10 px-20 max-sm:py-5 max-sm:px-7">
            <div>
                <h3 className="text-center text-xl mb-3">
                        Hey <span className="font-semibold text-[#5a598d]"><UserName /></span> 👋
                </h3>
                <p className="text-center capitalize">Below are recipes from your category</p>
            </div>
            
            <div className="w-300 m-auto p-5 grid grid-cols-3 gap-7 max-[1215px]:w-full max-sm:grid-cols-2 max-sm:px-0">
                {toShowMeals.map(item => (
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
                            <p className="w-fit mt-2 py-3 px-5 text-[14px] text-center bg-[#FED84C] duration-100 ease-in hover:bg-[#EFCC48] rounded max-sm:text-xs">
                                Read More
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
            <Link href="/categories" className="w-fit my-5 py-3 px-10 m-auto block bg-[#fec04c] rounded max-sm:text-xs">See More</Link>
        </div>
    )
}

export default UserCategoryList