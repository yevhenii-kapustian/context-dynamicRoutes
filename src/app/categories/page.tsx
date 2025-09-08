'use client'

import MealsCategory from "@/components/MealsCategory"
import CategorySelect from "@/components/CategorySelect"

const CategoriesPage = () => {
    return(
        <>
        <div className="w-300 m-auto">
            <h1 className="text-center text-4xl font-semibold text-[#598D66]">Explore Our Menu</h1>
            <div className="my-5 flex">
                <p className="w-1/2 text-xl text-[#598D66] font-semibold">Category:</p>
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