import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import {schema} from "../../schema";

type Inputs = {
    name: string
}

export function GroupModal({close, addGroup,addTask, title, selectedGroupId}: {
    close: React.Dispatch<React.SetStateAction<boolean>>,
    addGroup?: (name: string) => void,
    addTask?:  (name: string, taskName: string) => void
    title: string
    selectedGroupId?: string
}) {
     const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<Inputs>({resolver: yupResolver(schema)})
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            if(addGroup)
                addGroup(data.name)
            if(addTask && selectedGroupId)
                addTask(selectedGroupId, data.name)
            close(false)
        } catch (e) {
            console.error(e)
        }

    }

    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                        <div
                            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left ">
                                    <h3 className="text-base font-semibold text-gray-900 py-3" id="modal-title">{title}
                                    </h3>
                                    <p>
                                        <input placeholder='Enter task Name'
                                               className='block border rounded-xl w-full min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6'
                                               defaultValue="test" {...register("name")} />
                                    </p>
                                    {
                                        errors.name &&
                                        <p className='text-red-600 text-[13px] pt-2'>
                                            Error: {errors.name.message}
                                        </p>
                                    }

                                </div>

                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto">{title}
                                </button>
                                <button type="button"
                                        onClick={() => close(false)}
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
