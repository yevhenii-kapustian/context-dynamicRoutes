'use client'

import Image from 'next/image'
import { useParams } from 'next/navigation'
import { MealValueType } from '@/types/meal'
import { useMealContext } from '@/context/MealContext'
import useMealById from '@/hooks/useMealById'
import Link from 'next/link'
import { CaretLeft } from "@phosphor-icons/react";
import { useState } from 'react'

export default function ProductPage() {
  
    const [isOpenInstructions, setIsOpenInstructions] = useState<boolean>(false)
  
    const params = useParams()
    const {savedUserMeal, savedUserMealId} = useMealContext() as MealValueType
    const {addMeal} = useMealContext() as MealValueType
    const toShowUserMeal = useMealById(savedUserMealId as string)
    const isAdded = savedUserMeal.find(item => item.idMeal === savedUserMealId)

    if (!toShowUserMeal) return <p>Loading</p>

    const ingredients:{saveIngredient: string, saveMeasure: string}[] = []
    for (let i = 0; i < 20; i++) {
      const saveIngredient = toShowUserMeal[`strIngredient${i}` as keyof typeof toShowUserMeal] as string
      const saveMeasure = toShowUserMeal[`strMeasure${i}` as keyof typeof toShowUserMeal] as string
      ingredients.push({saveIngredient, saveMeasure})
    }

    return(
        <div className='text-[#2C2D35]'>
          <Link className='flex items-center text-xl' href="/categories"><CaretLeft size={17} />Explore Our Menu</Link>
          <section className='w-full max-w-250 mt-10 m-auto flex flex-row-reverse gap-5'>  
           <Image className='w-1/2' src={toShowUserMeal.strMealThumb} alt={toShowUserMeal.strMeal} width={400} height={400}/>
            <div className='w-1/2'>
              <h4 className='text-4xl font-bold capitalize'>{toShowUserMeal.strMeal}</h4>
              <p className='mt-5'>Category: {toShowUserMeal.strCategory}</p>
              <p>Area: {toShowUserMeal.strArea}</p>
              <button className={`mt-5 w-full p-2 text-center text-white duration-100 ease-in ${isAdded ? "bg-[#6ba97b] cursor-default" : "bg-[#598D66] cursor-pointer"} hover:bg-[#6caa7b]`}
                      onClick={() => addMeal(toShowUserMeal)}
                      >
                        {isAdded ? "Saved" : "Save"}
              </button>
            </div>
          </section>
          <section className='max-w-250 mt-10 m-auto'>
            <h4 className='text-2xl text-center font-bold uppercase'>Instructions</h4>
            <p className='mt-5'>
              {toShowUserMeal.strInstructions &&
                (!isOpenInstructions
                  && toShowUserMeal.strInstructions.length > 500
                    ? `${toShowUserMeal.strInstructions.slice(0, 500)}...`
                    : toShowUserMeal.strInstructions
              )}
            </p>
            {toShowUserMeal.strInstructions && toShowUserMeal.strInstructions?.length > 500 &&  
            <button 
                    onClick={() => setIsOpenInstructions(prev => !prev)}
                    className='underline'
                    >
                        {isOpenInstructions ? "See less" : "See more"}
            </button>
            }
          </section>
          <section className='mt-10 m-auto'>
            <h4 className='text-2xl text-center font-bold uppercase'>Ingredients / Measures</h4>
            {ingredients.map((item, index) => (
              <div className='flex gap-10' key={index}>
                  <p>{item.saveIngredient}</p>
                  <p>{item.saveMeasure}</p>
              </div>
            ) )}
          </section>
        </div>
    )
}