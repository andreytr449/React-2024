import {useParams} from "react-router-dom";
import {availableLanguagesArray} from "../constans.ts";
import EnPage from "./en/page.tsx";
import UaPage from "./ua/page.tsx";


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


    switch (router.lang) {
        case "en":
            return <EnPage />;
        case "ua":
          return <UaPage />;
        default:
            return <h1>Error: Language component not found</h1>;
    }
}