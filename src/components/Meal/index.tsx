'use client'

import { useMealContext } from "@/context/MealContext"
import { MealValueType } from "@/types/meal"
import Image from "next/image"
import Link from "next/link"

const Meal = () => {
    const {savedUserMeal, setSavedUserMealId} = useMealContext() as MealValueType
    const handleSaveId = (id: string) => {
        setSavedUserMealId(id)
    }
    return(
        <div>
            {savedUserMeal.map(item => (
                <Link href={`/categories/${item.strMeal}`} onClick={() => handleSaveId(item.idMeal as string)} key={item.idMeal}>
                    <Image src={item.strMealThumb} alt={item.strMeal} width={300} height={300}/>
                    <h5>{item.strMeal}</h5>
                </Link>
            ))}
        </div>
    )
}

export default Meal