import "../PriorityPopup/style.css"
import { IPriorityList, priorityList } from "../../../utils/constants";

interface IProps {
    isOpen:boolean,
    onClose:()=>void;
    handleSelect?:(value:IPriorityList | null)=>void;
    setIsSelect?:(value:IPriorityList | null)=>void;
}

export default function PriorityPopup(props: IProps) {
    const { isOpen, onClose ,handleSelect,setIsSelect} = props;

    const handleClick = (items : any) => {
        if(items){
            setIsSelect && setIsSelect(items);
            handleSelect && handleSelect(items)
            onClose();
        } 
    }
  
    return (
        <>
            {isOpen && <div className="priority-popup">
                {priorityList.map((items) => {
                    return (
                        <div className="popup-data flex ai-center" onClick={()=>handleClick(items)} key={items.id}>
                            <img alt="priority img" src={items.image} />
                            <span className="fs-16 fw-400">
                                {items.name}
                            </span>
                        </div>
                    )
                })}
            </div>}
        </>
    )
}