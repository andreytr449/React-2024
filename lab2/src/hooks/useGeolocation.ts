import {useEffect, useState} from "react";

export type PositionType = {
    latitude: number | null
    longitude: number | null
}
type ReturnValues = {
    position: PositionType,
    isLoading: boolean,
    isError: boolean
}

export function useGeolocation(): ReturnValues {
    const [position, setPosition] = useState<PositionType>({
        latitude: null,
        longitude: null
    })
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isError, setIsError] = useState<boolean>(false)

    useEffect(() => {
        try {
            setIsLoading(true)
            setIsError(false)
            navigator.geolocation.getCurrentPosition((position) => {
                setPosition({latitude: position.coords.latitude, longitude: position.coords.longitude})
            })
            setIsLoading(false)
        } catch (e) {
            console.log(e)
            setIsError(true)
            setIsLoading(false)
        }
    }, [])

    return {position, isLoading, isError}
}