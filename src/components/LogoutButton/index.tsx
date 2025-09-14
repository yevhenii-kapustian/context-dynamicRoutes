'use client'

import { useCategoryListContext } from "@/context/CategoryList";
import { useMealContext } from "@/context/MealContext";
import { useUserContext } from "@/context/UserName";
import { useRouter } from "next/navigation";

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

    return <button onClick={handleLogout}>Logout</button>
}

export default LogoutButton