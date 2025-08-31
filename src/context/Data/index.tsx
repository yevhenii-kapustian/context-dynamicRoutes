'use client'

import { createContext, useContext } from "react"
import { FetchDataType, DataType } from "@/types/fetchDataTypes"

const DataContext = createContext<DataType | null>(null)

export const DataProvider = ({children}: {children: React.ReactNode}) => {

    const fetchData = async ({url}:FetchDataType) => {
        try {
            const response = await fetch(url)
            return await response.json()
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <DataContext.Provider value={{fetchData}}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => {
    return useContext(DataContext)
}