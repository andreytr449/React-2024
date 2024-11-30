import {makeAutoObservable} from 'mobx'

export interface TaskType {
    id: string
    name: string
    isCompleted: boolean
}

export interface TasksGroupType {
    id: string
    name: string
    tasks: TaskType[] | null
}

class Store {
    tasks: TasksGroupType[] = []

    constructor() {
        makeAutoObservable(this);
        this.addGroup = this.addGroup.bind(this);
        this.addTask = this.addTask.bind(this);
        this.toggleTaskCompletion = this.toggleTaskCompletion.bind(this);
    }

    addTask(groupId: string, taskName: string) {
       console.log(groupId, taskName)
        const group = this.tasks.find((group) => group.id === groupId);
        if (!group) {
            throw new Error(`Group with id ${groupId} not found`);
        }
        console.log(group)
        const newTask: TaskType = {
            id: String(Date.now()),
            name: taskName,
            isCompleted: false,
        };

        if (!group.tasks) {
            group.tasks = [];
        }

        group.tasks.push(newTask);
    }

    addGroup(name: string) {
        this.tasks.push({
            id: String(Date.now()),
            name,
            tasks: [],
        });
    }

    toggleTaskCompletion(groupId: string, taskId: string) {
        const group = this.tasks.find(group => group.id === groupId);
        if (!group || !group.tasks) return;

        const task = group.tasks.find(task => task.id === taskId);
        if (task) {
            task.isCompleted = !task.isCompleted;
        }
    }



    deleteGroup(groupId: string) {
        const groupIndex = this.tasks.findIndex((group) => group.id === groupId);
        if (groupIndex === -1) {
            throw new Error(`Group with id ${groupId} not found`);
        }

        this.tasks.splice(groupIndex, 1);
    }
}

const store = new Store();
export default store;