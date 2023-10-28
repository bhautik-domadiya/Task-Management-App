import "../TaskCard/style.css"
import { TaskData } from "../../../utils/tasks.inteface";
import { taskPriorityImages } from "../../../utils/constants";

interface IProps {
    taskItem?:TaskData | null;
    onClick:()=>void;
}
const  TaskCard = (props:IProps) => {
    const {onClick,taskItem } = props;
    return (
        <div onClick={onClick} className="task-card-main task br-8 flex " key={taskItem && taskItem.id}>
            <div className="flex jc-spaceBetween">
                <div className="project-title br-50">
                    <span className="title fs-18 fw-500" >{taskItem?.title || "-"}</span>
                </div>
                <div className="user-image flex ai-center ">
                    <div>
                        <img className="arrow" alt="arrow" src={taskItem ? taskPriorityImages[taskItem?.priority] : ''} />
                    </div>
                    <div className="flex">
                        <img alt="user1" className="user-img-task" src="assets/userImg/user1.png" />
                    </div>
                </div>
            </div>
            <div className="title-card flex jc-spaceBetween">
                <div className="text-ellips-line-3">
                    <span className="title fs-16 fw-400" >{taskItem?.description || "-"}</span>
                </div>
                <div className="flex ai-center " >
                    <img alt="edit img" src="assets/icon/Edit.png" />
                </div>
            </div>
        </div>
    )
}

export default TaskCard;