import {makeAutoObservable} from 'mobx'

export interface TaskType {
    id: string
    name: string
    isCompleted: boolean | null
}

export interface TasksGroupType {
    id: string
    name: string
    tasks: TaskType[] | null
}

class Store {
    tasks: TasksGroupType[] = []

    constructor() {
        makeAutoObservable(this)
    }

    addTask(groupId: string, taskName: string) {
        const group = this.tasks.find((group) => group.id === groupId);
        if (!group) {
            throw new Error(`Group with id ${groupId} not found`);
        }

        const newTask: TaskType = {
            id: crypto.randomUUID(),
            name: taskName,
            isCompleted: false,
        };

        if (!group.tasks) {
            group.tasks = [];
        }

        group.tasks.push(newTask);
    }

    addGroup(groupName: string){
        const newGroup: TasksGroupType = {
            id: crypto.randomUUID(),
            name: groupName,
            tasks: [],
        }
        this.tasks.push(newGroup);
    }

    deleteTask(taskId: string, groupId: string) {
        const group = this.tasks.find((group) => group.id === groupId)
        if (!group) {
            throw new Error(`Group with id ${groupId} not found`);
        }

        if (!group.tasks) {
            throw new Error(`No tasks in group with id ${groupId}`);
        }

        const taskIndex = group.tasks.findIndex((task) => task.id === taskId);
        if (taskIndex === -1) {
            throw new Error(`Task with id ${taskId} not found in group ${groupId}`);
        }

        group.tasks.splice(taskIndex, 1);

        if (group.tasks.length === 0) {
            group.tasks = null;
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

export default Store;