import {useState} from "react";
import {DeleteGroup, GroupModal} from "./modals";
import {Container} from "./container.tsx";
import {Button} from "./button.tsx";
import {Group} from "./group.tsx";
import {observer} from "mobx-react-lite";
import store from "../store";


export const TodoList = observer(() => {
    const [isTaskModalOpen, setTaskModalOpen] = useState<boolean>(false)
    const [isGroupModalOpen, setGroupModalOpen] = useState<boolean>(false)
    const [isDeleteGroupModalOpen, setDeleteGroupModalOpen] = useState<boolean>(false)
    const [selectedGroupId, setSelectedGroupId] = useState<string>('')

    function deleteGroup(id: string) {
        setSelectedGroupId(id)
        setDeleteGroupModalOpen(true)
    }

    function addTask(id: string) {
        setSelectedGroupId(id)
        setTaskModalOpen(true)
    }

    return (
        <>
            {isTaskModalOpen && <GroupModal selectedGroupId={selectedGroupId} title='Add New Task' close={setTaskModalOpen} addTask={store.addTask}/>}
            {isDeleteGroupModalOpen && selectedGroupId &&
                <DeleteGroup action={() => store.deleteGroup(selectedGroupId)} close={setDeleteGroupModalOpen}/>}
            {isGroupModalOpen && <GroupModal title='Add New Group' close={setGroupModalOpen} addGroup={store.addGroup}/>}
            <Container>
                <div className="flex flex-col gap-5 mt-24 font-bold mb-10">
                    <div className='flex justify-between'>
                        <h1 className='text-3xl'>
                            Good Morning,
                            <p>Jan Doe</p>
                        </h1>
                        <div className='flex gap-4'>
                            {/*<Button onClick={() => setTaskModalOpen(true)}>Add New Note</Button>*/}
                            <Button onClick={() => setGroupModalOpen(true)}>Create New Group</Button>
                        </div>
                    </div>

                    {store.tasks && store.tasks.map((group) => (
                        <Group
                            name={group.name}
                            key={group.id}
                            id={group.id}
                            tasks={group.tasks ? group.tasks : []}
                            deleteGroupDispatch={deleteGroup}
                            addTask={addTask}
                            toggleTaskCompletion={store.toggleTaskCompletion}
                        />
                    ))}
                </div>
            </Container>
        </>
    )
})