import React from "react";

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return <button className='py-3 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900' {...props} />;
}