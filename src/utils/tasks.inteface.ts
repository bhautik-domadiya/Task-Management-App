export interface ITaskList {
    id: string;
    status: string;
    description: string;
    title: string;
    dueDate: {
        seconds: number;
        nanoseconds: number;
    };
    createdAt: {
        seconds: number;
        nanoseconds: number;
    };
    assignee: string;
    updatedAt: {
        seconds: number;
        nanoseconds: number;
    };
    priority: string;
}


export interface TaskData {
    id: string;
    status: string;
    description: string;
    title: string;
    dueDate: number;
    createdAt:number;
    assignee: string;
    priority: string;
    updatedAt?:string;
}