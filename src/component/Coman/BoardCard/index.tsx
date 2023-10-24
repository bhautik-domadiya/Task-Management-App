import "../BoardCard/style.css"
import TaskCard from "../TaskCard"



export default function BoardCard(props :any) {

    const {heading,totalNo} = props;

    const tackCardData = [
        {
            id: 1,
            projectName: "Nangita",
            projectTitle: "Implement Feedback Collector",
            workArrow: "assets/icon/upArrow.png",
        },
        {
            id: 2,
            projectName: "Magic8",
            projectTitle: "Bump version for new API for billing",
            workArrow: "assets/icon/low.svg",
        },
        {
            id: 3,
            projectName: "Sqor",
            projectTitle: "Add NPS feedback to waldboard",
            workArrow: "assets/icon/low.svg",
        },
    ]
    return (
        <div className="board-card br-12">
            <div className="card-title flex ai-center jc-spaceBetween">
                <div>
                <span className="heading fs-20 fw-500">{heading}</span>
                <span className="heading fs-20 fw-500">({totalNo})</span>
                </div>
                <div className="add-card flex br-4 jc-center ai-center" >
                    <span className=" fs-22  fw-600 primary lh-0">+</span>
                </div>
            </div>
            <div className="flex ticket-card">
                {tackCardData.map((items) => {
                    return (
                        <TaskCard key={items.id} projectName={items.projectName} projectTitle={items.projectTitle} workArrow={items.workArrow} />
                    )
                })}
            </div>
        </div>
    )
}