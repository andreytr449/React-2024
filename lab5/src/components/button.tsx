export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return <button className='py-1 focus:outline-none text-white bg-purple-700 w-28 h-10 text-xs  hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg px-5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 active:translate-y-1' {...props} />;
}