import {useFormContext} from "react-hook-form";
import {Input} from "./ui";
import {CircleAlert} from "lucide-react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string
    label?: string
    inputName: string
    required?: boolean
}


export function InputBlock({inputName, className, label, required}: Props) {
    const {
        register,
        formState: {errors},
    } = useFormContext()
    const errorText = errors[inputName]?.message as string

    return (
        <div className={`w-[800px] bg-white p-7 rounded-xl flex flex-col gap-7 ${className}`}>
            <span>
            {label}
                {required && <span className='text-red-600 ml-2'>*</span>}
            </span>
            <Input placeholder='Моя відповідь' {...register(inputName)}/>
            {errorText &&
            <span className='text-red-600 flex gap-2'><CircleAlert />{errorText}</span>}
        </div>
    )
}


