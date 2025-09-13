'use client'

import MealsCategory from "@/components/MealsCategory"
import CategorySelect from "@/components/CategorySelect"

const CategoriesPage = () => {
    return(
        <>
        <div className="w-300 flex flex-col gap-3 m-auto text-[#2E363E]">
            <h1 className="text-center text-4xl font-bold">For any events and people dear to you</h1>
            <div className="my-5 flex">
                <p className="w-1/2 text-xl font-semibold">Category:</p>
                <div className="w-1/2">
                    <CategorySelect/>
                </div>
            </div>
            <MealsCategory/>
        </div>
        </>
    )
}

export default CategoriesPage