'use client'

import { createContext, useContext } from "react"

const DataContext = createContext<DataType | null>(null)

type FetchDataType = {
    url: string
}

type DataType = {
    fetchData: (url: FetchDataType) => void
}

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