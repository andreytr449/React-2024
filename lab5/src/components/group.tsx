import {ChevronDown, ChevronUp, CircleX} from "lucide-react";
import { useState } from "react";

type Props = {
    deleteGroupDispatch: () => void
}

export function Group({deleteGroupDispatch}:Props) {
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <div className='w-full'>
            <div className='bg-[#272731] flex justify-between rounded-t-lg py-2 px-4 items-center'>
                <h1 className='text-md font-medium'>Design</h1>
                <div className='flex gap-4 items-center cursor-pointer'>
                    <CircleX onClick={deleteGroupDispatch} size={15} className='cursor-pointer text-red-600 hover:text-red-800 transition duration-150' />
                    <div className='text-gray-200 hover:text-gray-400 transition duration-150' onClick={() => setIsActive(prevState => !prevState)}>
                    {!isActive ?
                        <ChevronDown size={15} />
                        :
                        <ChevronUp  size={15}/>
                    }
                    </div>
                </div>
            </div>

            <div
                className={`bg-[#21212b] rounded-b-lg p-4 items-center transition-all duration-300 ease-in-out ${isActive ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0'}`}
                style={{ overflow: 'hidden' }}
            >
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-3 items-center'>
                        <input
                            type="checkbox"
                            id="rounded-checkbox"
                            className="appearance-none h-4 w-4 border border-gray-300 rounded-md bg-white checked:bg-blue-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200 cursor-pointer"
                        />
                        <label htmlFor="rounded-checkbox" className="text-[15px] font-light cursor-pointer">
                            Зробити щось
                        </label>
                    </div>


                    <div className='flex gap-3 items-center'>
                        <input
                            type="checkbox"
                            id="rounded-checkbox"
                            className="appearance-none h-4 w-4 border border-gray-300 rounded-md bg-white checked:bg-blue-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200 cursor-pointer"
                        />
                        <label htmlFor="rounded-checkbox" className="text-[15px] font-light cursor-pointer">
                            Зробити щось
                        </label>
                    </div>


                    <div className='flex gap-3 items-center'>
                        <input
                            type="checkbox"
                            id="rounded-checkbox"
                            className="appearance-none h-4 w-4 border border-gray-300 rounded-md bg-white checked:bg-blue-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200 cursor-pointer"
                        />
                        <label htmlFor="rounded-checkbox" className="text-[15px] font-light cursor-pointer">
                            Зробити щось
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
