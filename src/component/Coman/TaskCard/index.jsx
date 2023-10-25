import "../TaskCard/style.css"

export default function TaskCard(props) {
    const { projectName, projectTitle, workArrow, onClick } = props;
    return (
        <div onClick={onClick} className="task-card-main task br-8 flex ">
            <div className="flex jc-spaceBetween">
                <div className="project-title br-50">
                    <span className="title fs-18 fw-500" >{projectName}</span>
                </div>
                <div className="user-image flex ai-center ">
                    <div>
                        <img className="arrow" alt="arrow" src={workArrow} />
                    </div>
                    <div className="flex">
                        <img alt="user1" className="user-img-task" src="assets/userImg/user1.png" />
                    </div>

                </div>
            </div>
            <div className="title-card flex jc-spaceBetween">
                <div className="">
                    <span className="title fs-18 fw-400" >{projectTitle}</span>
                </div>
                <div className="flex ai-center " >
                    <img alt="edit img" src="assets/icon/Edit.png" />
                </div>
            </div>
        </div>
    )
}