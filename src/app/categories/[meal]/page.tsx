'use client'

import Image from 'next/image'
import { useParams } from 'next/navigation'
import { MealValueType } from '@/types/meal'
import { useMealContext } from '@/context/MealContext'
import Meal from '@/components/Meal'
import useMealById from '@/hooks/useMealById'

export default function ProductPage() {
    const params = useParams()
    console.log(params);
    
    const {savedUserMealId, setSavedUserMealId} = useMealContext() as MealValueType

    const {addMeal} = useMealContext() as MealValueType
    const toShowUserMeal = useMealById(savedUserMealId as string)

    if (!toShowUserMeal) return <p>Loading</p>
    console.log(toShowUserMeal);
    

    return(
      <>
        <div>
          <Image src={toShowUserMeal.strMealThumb} alt={toShowUserMeal.strMeal} width={300} height={300}/>
          <h4>{toShowUserMeal.strMeal}</h4>
          <button onClick={() => addMeal(toShowUserMeal)}>Save</button>
        </div>
        <Meal/>
      </>
    )
}