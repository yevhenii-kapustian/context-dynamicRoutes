'use client'

import { useMealContext } from "@/context/MealContext"
import { MealValueType } from "@/types/meal"
import Image from "next/image"
import Link from "next/link"

const Meal = () => {
    const {savedUserMeal, setSavedUserMealId, removeMeal} = useMealContext() as MealValueType
    const handleSaveId = (id: string) => {
        setSavedUserMealId(id)
    }
    return(
        <>
            {savedUserMeal.map(item => (
                <div key={item.idMeal}>
                    <Link href={`/categories/${item.strMeal}`} onClick={() => handleSaveId(item.idMeal as string)}>
                        <Image className="w-full rounded" src={item.strMealThumb} alt={item.strMeal} width={300} height={300}/>
                        <h5 className="font-bold capitalize">{item.strMeal}</h5>
                    </Link>
                    <button className="max-sm:text-sm" onClick={() => removeMeal(item.idMeal)}>Remove</button>
                </div>
            ))}
        </>
    )
}

export default Meal