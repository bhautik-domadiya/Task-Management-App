import "../ToDoPopup/style.css"

const todoData = [
    {
        id: 1,
        name: "In Progress"
    },
    {
        id: 2,
        name: "Done"
    }

]

export default function ToDoPopup(props: any) {
    const { isOpen, onClose, setToDo } = props;

    const handleToDoClick = (items: any) => {
        setToDo(items);
        onClose();
      
    }
    
    return (
        <>
            {isOpen && <div className="todo-popup">
                {todoData.map((items) => {
                    return (
                        <div key={items.id} className="todo-popup-data" onClick={() => handleToDoClick(items)}>
                            <span className="fs-16 fw-400 " >{items.name}</span>
                        </div>
                    )
                })}
            </div>
            }
        </>
    )
} 