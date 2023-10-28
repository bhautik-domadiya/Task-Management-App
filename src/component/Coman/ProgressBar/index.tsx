import "../ProgressBar/style.css"

export default function ProgressBar(props: any) {
    const { progressData} = props;
        const {userName,
            totalTask,
            completedTask,
            bgColor,
            textColor }=progressData;
    return (
        <div className="flex flex-direction gap-10">
            <div className="flex jc-spaceBetween ">
                <span className="user-name fs-18 fw-400" >{userName}</span>
                <div className="total-task">
                    <span className="completed-task fs-16 fw-400">{completedTask}</span>
                    <span className="fs-16 fw-400">/</span>
                    <span className="completed-task fs-16 fw-400">{totalTask}</span>
                </div>
            </div>
            <div className={`progressbar  flex ai-center ${bgColor}`} >
                <div className={`move-progressbar ${textColor}`}>
                </div>
            </div>
        </div>
    )
}