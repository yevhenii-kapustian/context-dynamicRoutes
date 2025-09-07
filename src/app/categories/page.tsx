'use client'

import MealsCategory from "@/components/MealsCategory"
import CategorySelect from "@/components/CategorySelect"

const CategoriesPage = () => {
    return(
        <>
        <div className="w-30">
            <CategorySelect/>
        </div>
        <MealsCategory/>
        </>
    )
}

export default CategoriesPage