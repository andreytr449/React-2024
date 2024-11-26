import {availableLanguages} from "../constans.ts";
import {LanguageBlock} from "./language-block.tsx";
import {Link} from "react-router-dom";

export function HomePage(){
    return (
        <div className='flex gap-3 justify-center py-20'>
            {availableLanguages.map(lang => (
                <Link to={`/${lang.shortName}/page-url`} key={lang.name} >
                <LanguageBlock name={lang.name} url={lang.url} />
                </Link>
            ))}
        </div>
    )
}