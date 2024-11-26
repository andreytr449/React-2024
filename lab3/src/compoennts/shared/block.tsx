export function Block({children}: {children: React.ReactNode}) {
    return (
        <div className='w-[650px] bg-white p-7 rounded-xl flex flex-col gap-7'>
            {children}
        </div>
    )
}