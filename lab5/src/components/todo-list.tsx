import {useState} from "react";
import {DeleteGroup, GroupModal, TaskModal} from "./modals";
import {Container} from "./container.tsx";
import {Button} from "./button.tsx";
import {Group} from "./group.tsx";
import {observer} from "mobx-react-lite";


export const TodoList = observer(() => {
    const [isTaskModalOpen, setTaskModalOpen] = useState<boolean>(false)
    const [isGroupModalOpen, setGroupModalOpen] = useState<boolean>(false)
    const [isDeleteGroupModalOpen, setDeleteGroupModalOpen] = useState<boolean>(false)


    return (
        <>
            {isTaskModalOpen && <TaskModal close={setTaskModalOpen}/>}
            {isDeleteGroupModalOpen && <DeleteGroup close={setDeleteGroupModalOpen}/>}
            {isGroupModalOpen && <GroupModal close={setGroupModalOpen}/>}
            <Container>
                <div className="flex flex-col gap-5 mt-24 font-bold mb-10">
                    <div className='flex justify-between'>
                        <h1 className='text-3xl'>
                            Good Morning,
                            <p>Jan Doe</p>
                        </h1>
                        <div className='flex gap-4'>
                            <Button onClick={() => setTaskModalOpen(true)}>Add New Note</Button>
                            <Button>Create New Group</Button>
                        </div>
                    </div>
                    <Group deleteGroupDispatch={() => setDeleteGroupModalOpen(true)}/>
                    <Group deleteGroupDispatch={() => setDeleteGroupModalOpen(true)}/>
                    <Group deleteGroupDispatch={() => setDeleteGroupModalOpen(true)}/>
                    <Group deleteGroupDispatch={() => setDeleteGroupModalOpen(true)}/>
                </div>
            </Container>
        </>
    )
})