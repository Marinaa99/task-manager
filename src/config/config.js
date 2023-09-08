

export const storageKeys = {
    USER: 'user-key'
}

export const reactQueryConfig = {
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            cacheTime: 1000 * 60 * 30,
            retry: 0
        }
    }
}