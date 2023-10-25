import "../ToDoPopup/style.css"

export default function ToDoPopup(props : any){
    const {isOpen,onClose} = props;
    return(
        <>
      {isOpen &&  <div className="todo-popup">
             <span className="fs-16 fw-400 " onClick={onClose}>In Progress</span>
             <span className="fs-16 fw-400 " onClick={onClose}>Done</span>
        </div>
    }
    </>
    )
} 