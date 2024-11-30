import {ChevronDown, ChevronUp, CircleX, Plus} from "lucide-react";
import {useState} from "react";
import {TaskType} from "../store";
import {Button} from "./button.tsx";

type Props = {
    deleteGroupDispatch: (id: string) => void;
    addTask: (id: string) => void;
    toggleTaskCompletion: (groupId: string, taskId: string) => void;
    id: string;
    tasks: TaskType[] | null;
    name: string;
};

export function Group({
                          deleteGroupDispatch,
                          name,
                          id,
                          tasks,
                          addTask,
                          toggleTaskCompletion,
                      }: Props) {
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <div className="w-full">
            <div className="bg-[#272731] flex justify-between rounded-t-lg py-2 px-4 items-center">
                <h1 className="text-md font-medium">{name}</h1>
                <div className="flex gap-4 items-center cursor-pointer">
                    <CircleX
                        onClick={() => deleteGroupDispatch(id)}
                        size={15}
                        className="cursor-pointer text-red-600 hover:text-red-800 transition duration-150"
                    />
                    <div
                        className="text-gray-200 hover:text-gray-400 transition duration-150"
                        onClick={() => setIsActive((prevState) => !prevState)}
                    >
                        {!isActive ? <ChevronDown size={15} /> : <ChevronUp size={15} />}
                    </div>
                    <Plus onClick={() => addTask(id)} size={15} />
                </div>
            </div>

            <div
                className={`bg-[#21212b] rounded-b-lg p-4 items-center transition-all duration-300 ease-in-out ${
                    isActive ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"
                }`}
                style={{ overflow: "hidden" }}
            >
                {tasks && tasks.length > 0 ? (
                    <div className="flex flex-col gap-4">
                        {tasks.map((task) => (
                            <div className="flex gap-3 items-center" key={task.id}>
                                <input
                                    checked={task.isCompleted}
                                    onChange={() => toggleTaskCompletion(id, task.id)}
                                    type="checkbox"
                                    id={task.id}
                                    className="appearance-none h-4 w-4 border border-gray-300 rounded-md bg-white checked:bg-blue-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200 cursor-pointer"
                                />
                                <label
                                    htmlFor={task.id}
                                    className={`text-[15px] font-light cursor-pointer ${
                                        task.isCompleted && "line-through"
                                    }`}
                                >
                                    {task.name}
                                </label>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-3 py-5">
                        <h1 className="text-xl">No Tasks</h1>
                        <Button onClick={() => addTask(id)}>Add new Task</Button>
                    </div>
                )}
            </div>
        </div>
    );
}
