'use client'

import UserName from "@/components/UserName"
import Meal from "@/components/Meal"
import LogoutButton from "@/components/LogoutButton"
import { useMealContext } from "@/context/MealContext"
import { MealValueType } from "@/types/meal"

const ProfilePage = () => {
    const { savedUserMeal } = useMealContext() as MealValueType

    return (
        <section className="py-10 px-6 lg:px-20 text-[#2C2D35]">
            <div className="flex justify-between items-center border-b pb-4 mb-6">
                <h1 className="text-4xl lg:text-5xl font-bold uppercase tracking-wide">Profile</h1>
                <LogoutButton />
            </div>

            <h3 className="text-xl mb-10">
                Hey <span className="font-semibold text-[#5a598d]"><UserName /></span> 👋
            </h3>

            <div className="bg-white shadow-lg rounded-2xl p-6">
                <h3 className="text-2xl font-semibold text-center uppercase mb-6">
                    Saved Recipes
                </h3>

                {savedUserMeal.length > 0 ? (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Meal />
                    </div>
                ) : (
                    <div className="flex items-center justify-center min-h-[250px]">
                        <p className="text-gray-500 text-lg text-center italic capitalize">
                            You haven't saved any recipes yet 🍴
                        </p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default ProfilePage
