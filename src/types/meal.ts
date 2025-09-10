type IngredientKeys = `strIngredient${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20}`
type MeasureKeys = `strMeasure${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20}`

export type MealType = {
    strMeal: string,
    strMealThumb: string
    strArea: string,
    idMeal?: string,
    strCategory?: string,
    strInstructions?: string,
} & {
    [key in IngredientKeys]: string
} & {
    [key in MeasureKeys]: string
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