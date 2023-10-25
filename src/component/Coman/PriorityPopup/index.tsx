import { useState } from "react";
import "../PriorityPopup/style.css"

const popupData = [
    {
        id: 1,
        image: "assets/icon/verylow.svg",
        name: "Very Low"
    },
    {
        id: 2,
        image: "assets/icon/low.svg",
        name: "Low"
    },
    {
        id: 3,
        image: "assets/icon/high.svg",
        name: "High"
    },
    {
        id: 4,
        image: "assets/icon/veryHigh.svg",
        name: "Very High"
    },
    {
        id: 5,
        image: "assets/icon/intermediate.svg",
        name: "Inter Mediate"
    },
]

export default function PriorityPopup(props: any) {
    const { isOpen, onClose ,setIsSelect} = props;

    const handleClick = (items : any) => {
        setIsSelect(items)
        onClose()
    }
  
    return (
        <>
            {isOpen && <div className="priority-popup">
                {popupData.map((items) => {
                    return (
                        <div className="popup-data flex ai-center" onClick={()=>handleClick(items)}>
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