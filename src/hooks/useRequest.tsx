import React from 'react'
import { useState, useCallback } from 'react'

type Props = {}

const useRequest = (props: Props) => {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const request = useCallback(async (url: string) => {
        try {
            const res = await fetch(url);
            if (!res.ok) {
                setLoading(false)
                throw new Error("Couldn`t fetch status:" + res.status);
            }
            const data = await res.json()
            setLoading(false)
            return data;
        } catch (error) {
            setError(true);
            setLoading(false);
            throw error;
        }
    }, [])
    return {request, loading, error}
}

export default useRequest