import "../ToDoPopup/style.css"

const todoData = [
    {
        name: "In Progress"
    },
    {
        name: "Done"
    }

]

export default function ToDoPopup(props: any) {
    const { isOpen, onClose } = props;
    return (
        <>
            {isOpen && <div className="todo-popup">
                {todoData.map((items) => {
                    return (
                        <div className="todo-popup-data">
                            <span className="fs-16 fw-400 " onClick={onClose}>{items.name}</span>
                        </div>
                    )
                })}
                {/* <span className="fs-16 fw-400 " onClick={onClose}></span> */}
            </div>
            }
        </>
    )
} 