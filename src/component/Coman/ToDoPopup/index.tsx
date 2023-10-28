import { IToDoList, todoData } from "../../../utils/constants";
import "../ToDoPopup/style.css"


interface IProps {
    isOpen:boolean,
    onClose:()=>void;
    setToDo?:(value:IToDoList)=>void;
    handleTaskStatus?:(value:IToDoList)=>void;
}
export default function ToDoPopup(props: IProps) {
    const { isOpen, onClose,setToDo ,handleTaskStatus} = props;
    const handleToDoClick = (items: any) => {
        setToDo && setToDo(items);
        handleTaskStatus && handleTaskStatus(items)
        onClose();
    }
    return (
        <>
            {isOpen && <div className="todo-popup">
                {todoData.map((items) => {
                    return (
                        <div className="todo-popup-data" key={items.id} onClick={()=>handleToDoClick(items)}>
                            <span className="fs-16 fw-400 " onClick={onClose}>{items.name}</span>
                        </div>
                    )
                })}
            </div>
            }
        </>
    )
} 