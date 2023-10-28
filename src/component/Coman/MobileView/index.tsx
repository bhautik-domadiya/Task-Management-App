import {taskTypes } from "../../../utils/constants";
import "../MobileView/style.css"


interface IProps {
    handleSelect:(cardType:string) => void;
    selectedTab:string | undefined;
}
export default function MobileView(props:IProps) {
    const {handleSelect,selectedTab} = props;
    return (
        <div className="mobile-board">
            <div className="chips-main flex">
                <button className={taskTypes.todo === selectedTab ? "active-tab" : ''} onClick={()=>handleSelect(taskTypes?.todo)}>To Do(3)</button>
                <button className={taskTypes.inprogress === selectedTab ? "active-tab" : ''} onClick={()=>handleSelect(taskTypes?.inprogress)}>In Progress(2)</button>
                <button className={taskTypes.done === selectedTab ? "active-tab" : ''} onClick={()=>handleSelect(taskTypes?.done)}>Done(1) </button>
            </div>
        </div>
    )
}