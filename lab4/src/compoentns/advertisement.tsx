import {useParams} from "react-router-dom";
import {availableLanguagesArray} from "../constans.ts";

interface PageParams {
    lang?: string
}

export function Advertisement() {
    const router = useParams<Record<keyof PageParams, string>>();
    if (router && router.lang) {
        if (!availableLanguagesArray.includes(router.lang)) {
            return <h1>Error</h1>
        }
    } else
        return <h1>Error</h1>

    return (
        <></>
    )
}