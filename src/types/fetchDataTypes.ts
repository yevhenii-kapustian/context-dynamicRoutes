export type FetchDataType = {
    url: string
}

export type DataType = {
    fetchData: <T>(url: FetchDataType) => Promise<T>
}