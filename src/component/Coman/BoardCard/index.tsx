import { userRoles } from "../../../utils/constants";
import { TaskData } from "../../../utils/tasks.inteface";
import "../BoardCard/style.css"
import TaskCard from "../TaskCard"

interface IProps {
    heading:string;
    onClick:(item:TaskData | null)=>void;
    onModelOpen:()=>void;
    isAdmin?:string | undefined;
    id?:number,
    taskList?:TaskData[] | null,
    cardIndex?:number,
    key:string
}

export default function BoardCard(props: IProps) {
    const { heading, onClick, onModelOpen ,cardIndex, isAdmin,taskList ,key} = props;
    return (
        <div className="board-card br-10" key={key}>
            <div className="card-title flex ai-center jc-spaceBetween">
                <div>
                    <span className="heading text-capitalize fs-20 fw-500">{heading}</span>
                    <span className="heading fs-20 fw-500">({taskList?.length})</span>
                </div>
                {(isAdmin === userRoles.admin &&  cardIndex === 0) && 
                <div className="add-card flex br-4 jc-center ai-center" onClick={onModelOpen} >
                    <span className=" fs-22  fw-600 primary lh-0">+</span>
                </div>}
            </div>
            
            <div className="flex ticket-card">
                {taskList && taskList.map((items) => {
                    
                    return (
                        <TaskCard 
                            onClick={()=>onClick(items || null)}  
                            taskItem={items}
                        />
                    )
                })}
            </div>
        </div>
    )
}