'use client'

import Image from 'next/image'
import { useParams } from 'next/navigation'
import { MealValueType } from '@/types/meal'
import { useMealContext } from '@/context/MealContext'
import useMealById from '@/hooks/useMealById'
import Link from 'next/link'
import { CaretLeft } from "@phosphor-icons/react";

export default function ProductPage() {
    const params = useParams()
    console.log(params);
    
    const {savedUserMeal, savedUserMealId} = useMealContext() as MealValueType

    const {addMeal} = useMealContext() as MealValueType
    const toShowUserMeal = useMealById(savedUserMealId as string)

    const isAdded = savedUserMeal.find(item => item.idMeal === savedUserMealId)

    if (!toShowUserMeal) return <p>Loading</p>
    console.log(toShowUserMeal);
    

    return(
        <div className='text-[#2C2D35]'>
          <Link className='flex items-center text-xl' href="/categories"><CaretLeft size={17} />Explore Our Menu</Link>
          <section className='w-full max-w-250 mt-5 m-auto flex flex-row-reverse gap-5'>  
           <Image className='w-1/2' src={toShowUserMeal.strMealThumb} alt={toShowUserMeal.strMeal} width={400} height={400}/>
            <div className='w-1/2'>
              <h4 className='text-4xl capitalize'>{toShowUserMeal.strMeal}</h4>
              <p className='mt-5'>Category: {toShowUserMeal.strCategory}</p>
              <p>Area: {toShowUserMeal.strArea}</p>
              <button className={`mt-5 w-full p-2 text-center text-white duration-100 ease-in ${isAdded ? "bg-[#6ba97b] cursor-default" : "bg-[#598D66] cursor-pointer"} hover:bg-[#6caa7b]`}
                      onClick={() => addMeal(toShowUserMeal)}>
                        {isAdded ? "Saved" : "Save"}
              </button>
            </div>
          </section>
        </div>
    )
}