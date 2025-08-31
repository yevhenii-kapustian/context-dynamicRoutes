export type FetchDataType = {
    url: string
}

export type DataType = {
    fetchData: (url: FetchDataType) => void
}