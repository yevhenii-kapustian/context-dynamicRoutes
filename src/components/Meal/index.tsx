'use client'

import { useMealContext } from "@/context/MealContext"
import { MealValueType } from "@/types/meal"
import Image from "next/image"

const Meal = () => {
    const {savedUserMeal} = useMealContext() as MealValueType
    return(
        <div>
            {savedUserMeal.map(item => (
                <div key={item.idMeal}>
                    <Image src={item.strMealThumb} alt={item.strMeal} width={300} height={300}/>
                    <h5>{item.strMeal}</h5>
                </div>
            ))}
        </div>
    )
}

export default Meal