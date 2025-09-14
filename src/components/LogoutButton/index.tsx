'use client'

import { useCategoryListContext } from "@/context/CategoryList";
import { useMealContext } from "@/context/MealContext";
import { useUserContext } from "@/context/UserName";
import { useRouter } from "next/navigation";
import { SignOut } from "@phosphor-icons/react";

const LogoutButton = () => {
    const { setSavedUserName } = useUserContext()!;
    const { resetMeals } = useMealContext()!;
    const { setUserCategory } = useCategoryListContext()!;
    const router = useRouter();

    const handleLogout = () => {
        setSavedUserName("");
        localStorage.removeItem("userName");

        setUserCategory("");
        localStorage.removeItem("userCategory");

        resetMeals();
        localStorage.removeItem("savedUserMeal");

        router.push("/");
    }

    return <button onClick={handleLogout}><SignOut size={32} /></button>
}

export default LogoutButton