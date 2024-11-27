import {Button, Container, Group} from "./components";

function App() {
    return (
        <Container>
            <div className="flex flex-col gap-5 mt-24 font-bold">
                <div className='flex justify-between'>
                    <h1 className='text-3xl'>
                        Good Morning,
                        <p>Jan Doe</p>
                    </h1>
                    <div className='flex gap-4'>
                        <Button>Add New Note</Button>
                        <Button>Create New Group</Button>
                    </div>
                </div>
                <Group/>
            </div>
        </Container>
    )
}

export default App
