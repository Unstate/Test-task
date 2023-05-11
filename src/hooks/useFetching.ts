import {useState} from 'react'

export const useFetching = (callback:Function) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const fetching:Function = async () => {
        try {
            setIsLoading(true)
            await callback()
        } catch (error:any) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }
    return fetching
}