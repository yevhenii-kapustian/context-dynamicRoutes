'use client'

import { useCategoryListContext } from "@/context/CategoryList";
import { useUserContext } from "@/context/UserName";
import { useRouter } from "next/navigation";
import { SignOut } from "@phosphor-icons/react";
import { useMealContext } from "@/context/MealContext";
import { MealValueType } from "@/types/meal";

const LogoutButton = () => {
    const { setSavedUserName } = useUserContext()!;
    const { setUserCategory } = useCategoryListContext()!;
    const { setSavedUserMeal } = useMealContext() as MealValueType
    const router = useRouter();

    const handleLogout = () => {
        setSavedUserName("");
        localStorage.removeItem("userName");

        setUserCategory("");
        localStorage.removeItem("userCategory");

        setSavedUserMeal([])
        localStorage.removeItem("savedUserMeal");

        router.push("/");
    }

    return <button className="cursor-pointer" onClick={handleLogout}><SignOut size={32} /></button>
}

export default LogoutButton