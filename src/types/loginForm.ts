export type CategoryListType = {
    idCategory: string,
    strCategory: string,
    strCategoryThumb: string,
    strCategoryDescription: string
}

export type CategoryListContextType = {
    category: CategoryListType[],
    setCategory: (category:CategoryListType[]) => void,
    getCategory: () => void
}