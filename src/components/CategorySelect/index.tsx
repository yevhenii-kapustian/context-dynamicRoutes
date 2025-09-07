'use client'

import { useCategoryListContext } from "@/context/CategoryList"
import { CategoryListContextType } from "@/types/loginForm"

const CategorySelect = () => {
    const {category, setUserCategory, userCategory} = useCategoryListContext() as CategoryListContextType

    return(
        <select onChange={(e) => setUserCategory(e.target.value)} value={userCategory} className="w-full p-1 border-b" name="category" id="category" required>
                    {category.map((item, index) => <option key={index} value={item.strCategory}>{item.strCategory}</option> )}
        </select>
    )
}

export default CategorySelect