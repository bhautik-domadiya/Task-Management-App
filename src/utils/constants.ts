export const taskProgressRatio = [
    {
        id:1,
        userName: "Leslie Alexander",
        totalTask:"5",
        completedTask:"3",
        bgColor:"Purple-1300",
        textColor:"Purple-1200",
    },
    {
        id:2,
        userName: "Esther Howard",
        totalTask:"3",
        completedTask:"2",
        bgColor:"green-100",
        textColor:"green-300",
    },
    {
        id:3,
        userName: "Arlene McCoy",
        totalTask:"4",
        completedTask:"2",
        bgColor:"blue-100",
        textColor:"blue-300",
    },
    {
        id:4,
        userName: "Darlene Robertson",
        totalTask:"3",
        completedTask:"1",
        bgColor:"orange-200",
        textColor:"orange-300",
    },
    {
        id:5,
        userName: "Courtney Henry",
        totalTask:"3",
        completedTask:"3",
        bgColor:"green-100",
        textColor:"green-300",
    },
    {
        id:6,
        userName: "Jacob Jones",
        totalTask:"3",
        completedTask:"2",
        bgColor:"blue-100",
        textColor:"blue-300",
    },
]


export interface IDynamicTypes {
    [key: string]: string;
}
//task priorities 

export const taskPriority:IDynamicTypes = {
    very_low : 'VERY_LOW',
    low : 'LOW',
    very_high : 'VERY_HIGH',
    high : 'HIGH',
    inter_mediate:"INTER_MEDIATE"
}

export const  taskPriorityImages:IDynamicTypes = {
    VERYLOW : 'assets/icon/verylow.svg',
    LOW : 'assets/icon/low.svg',
    VERYHIGH : 'assets/icon/veryHigh.svg',
    HIGH : 'assets/icon/high.svg',
    INTERMEDIATE:"assets/icon/intermediate.svg"
}

//task types 
export const taskTypes:IDynamicTypes = {
    todo: 'TODO' || 'To Do' || 'todo',
    inprogress: 'INPROGRESS',
    done: 'DONE',
};


// todo list 

export interface IToDoList {
    name: string;
    id:number,
    value:string;
}

export const todoData : IToDoList[] = [
    {
        name: "To Do",
        id:1,
        value:taskTypes.todo,
    },
    {
        name: "In Progress",
        id:2,
        value:taskTypes.inprogress,
    },
    {
        name: "Done",
        id:3,
        value:taskTypes.done,
    }

]


//priority list 


export interface IPriorityList {
    name: string;
    id:number,
    value:string;
    image:string;
}

export const priorityList : IPriorityList[] = [
    {
        id: 1,
        image: "assets/icon/verylow.svg",
        name: "Very Low",
        value:"VERYLOW"
    },
    {
        id: 2,
        image: "assets/icon/low.svg",
        name: "Low",
        value:"LOW"
    },
    {
        id: 3,
        image: "assets/icon/high.svg",
        name: "High",
        value:"HIGH"
    },
    {
        id: 4,
        image: "assets/icon/veryHigh.svg",
        name: "Very High",
        value:"VERYHIGH"
    },
    {
        id: 5,
        image: "assets/icon/intermediate.svg",
        name: "Inter Mediate",
        value:"INTERMEDIATE"
    },
]


export const userRoles:IDynamicTypes = {
    admin : 'admin',
    staff:'staff'
}