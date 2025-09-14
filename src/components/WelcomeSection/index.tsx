'use client'

import { useCategoryListContext } from "@/context/CategoryList"
import { CategoryListContextType } from "@/types/loginForm"
import Image from "next/image"
import Link from "next/link"

const WelcomeSection = () => {
    const {category} = useCategoryListContext() as CategoryListContextType
    return( 
        <section>
            <Image className="w-full h-[800px] mask-b-from-90% mask-b-to-100% object-cover" src="/welcomeHome.png" alt="welcome" width={2000} height={2000}/>
            <div className="absolute top-45 left-40 w-1/3 px-8 flex flex-col gap-4 max-[1230px]:w-1/2 max-[1230px]:left-15 max-sm:w-full max-sm:left-0">
                <p className="w-fit py-2 px-4 text-[12px] bg-[#F2F6FA] uppercase rounded">delicious</p>
                <h1 className="text-5xl font-bold text-white max-[380px]:text-4xl">From Savory Dishes to Sweet Treats, All in One Place</h1>
                <p className="text-white font-light">Explore easy-to-follow recipes, from hearty meals to indulgent desserts, and bring flavors to your kitchen every day.</p>
                <div className="flex items-center gap-5">
                    <Link className="py-4 px-6 text-[14px] text-[#2E363E] text-center shadow-xl shadow-amber-200 bg-[#FED84C] rounded max-sm:w-1/2" href="/categories">All Categories</Link>
                    <p className="text-white max-sm:w-1/2">{category.length} different types of categories</p>
                </div>
            </div>
        </section>
    )
}

export default WelcomeSection