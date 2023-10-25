import "../PriorityPopup/style.css"

const popupData = [
    {
        id:1,
        image:"assets/icon/verylow.svg",
        name:"Very Low"
    },
    {
        id:2,
        image:"assets/icon/low.svg",
        name:"Low"
    },
    {
        id:3,
        image:"assets/icon/high.svg",
        name:"High"
    },
    {
        id:4,
        image:"assets/icon/veryHigh.svg",
        name:"Very High"
    },
    {
        id:5,
        image:"assets/icon/intermediate.svg",
        name:"Inter Mediate"
    },
]

export default function PriorityPopup(props :any) {
    const { isOpen, onClose } = props;
    return (
        <>
            {isOpen && <div className="priority-popup">
          {popupData.map((items)=> { 
            return(

                 <div className="popup-data flex ai-center" onClick={onClose}>
                    <img alt="priority img" src={items.image} />
                    <span className="fs-16 fw-400">
                        {items.name}
                    </span>
                </div>
                 )
                })}
                {/* <div className="popup-data flex ai-center" onClick={onClose}>
                    <img src="assets/icon/low.svg" />
                    <span className="fs-16 fw-400">
                        Low
                    </span>
                </div>
                <div className="popup-data flex ai-center" onClick={onClose}>
                    <img src="assets/icon/high.svg" />
                    <span className="fs-16 fw-400">
                        High
                    </span>
                </div>
                <div className="popup-data flex ai-center" onClick={onClose}>
                    <img src="assets/icon/veryHigh.svg" />
                    <span className="fs-16 fw-400">
                        Very High
                    </span>
                </div>
                <div className="popup-data flex ai-center" onClick={onClose}>
                    <img src="assets/icon/intermediate.svg" />
                    <span className="fs-16 fw-400">
                        Inter Mediate
                    </span>
                </div> */}
            </div>}
        </>
    )
}