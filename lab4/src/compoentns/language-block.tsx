type Props = {
    name: string
    url: string
}

export function LanguageBlock({name, url}:Props){
    return (
        <div className='flex flex-col w-28 h-14 bg-white rounded-lg justify-center items-center cursor-pointer   border border-transparent hover:border-black transition-all duration-300 ease-in-out hover:scale-105'>
            <img width={30} src={url} alt={name} />
            <h1 className='text-black font-semibold'>{name}</h1>
        </div>
    )
}