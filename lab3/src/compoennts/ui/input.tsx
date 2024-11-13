import React from 'react';

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return <input
        className="block py-2.5 px-0 text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-[#5b3aa1] focus:outline-none focus:ring-0 focus:border-blue-600"
        {...props} />;
}