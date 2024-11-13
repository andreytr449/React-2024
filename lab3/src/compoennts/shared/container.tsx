import {ReactNode} from "react";

export function Container({children}: {children: ReactNode}) {
    return (
        <div className='mx-auto min-w-[1250px] px-[440px] py-14'>
            {children}
        </div>
    )
}