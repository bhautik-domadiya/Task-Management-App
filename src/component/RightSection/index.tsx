import { taskProgressRatio } from "../../utils/constants";
import ProgressBar from "../Coman/ProgressBar";
import "../RightSection/style.css"

export default function RightSection() {
    return (
        <div>
            <span className="progress-title fs-20 fw-500" >Task Progress</span>
            <div className="progress-main flex flex-direction">
                {taskProgressRatio.map((items) => {
                    return (
                        <ProgressBar progressData={items}
                            // userName={items.userName}
                            // totalTask={items.totalTask}
                            // completedTask={items.completedTask}
                            // key={items.id}
                            // bgColor={items.bgColor}
                        />
                    )
                })}
            </div>
        </div>
    )
}