export type MealType = {
    strMeal: string,
    strMealThumb: string
    strArea: string,
    idMeal?: string,
    strCategory?: string,
    strInstructions?: string,
}

export type MealValueType = {
    savedUserMeal: MealType[],
    setSavedUserMeal: (item: MealType[]) => void,
    addMeal: (meal: MealType) => void,
    removeMeal: (id: string) => void,
    resetMeals: () => void
    savedUserMealId: string,
    setSavedUserMealId: (id: string) => void
}