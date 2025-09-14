'use client'

import { useState } from "react";
import { useCategoryListContext } from "@/context/CategoryList";
import { CategoryListContextType } from "@/types/loginForm";

const CategorySelect = () => {
    const { category, setUserCategory, userCategory } = useCategoryListContext() as CategoryListContextType;
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        setIsOpen(prev => !prev)
    }

    return (
        <div className="relative w-full max-w-xs mx-auto">
            <button
                onClick={handleOpen}
                className="
                    w-full
                    bg-white
                    border
                    border-gray-300
                    rounded-xl
                    py-2 px-4
                    text-gray-700
                    font-medium
                    flex justify-between items-center
                "
            >
                {userCategory || "Select category"}
                <span className={`ml-2 transform ${isOpen ? "rotate-180" : ""}`}>▼</span>
            </button>

            {isOpen && (
                <ul className="absolute w-full h-60 mt-1 bg-white border border-gray-300 rounded-xl shadow-lg overflow-y-auto">
                    {category.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => { setUserCategory(item.strCategory); setIsOpen(false); }}
                            className="px-4 py-2 cursor-pointer hover:bg-[#6caa7b] hover:text-white"
                        >
                            {item.strCategory}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CategorySelect;
