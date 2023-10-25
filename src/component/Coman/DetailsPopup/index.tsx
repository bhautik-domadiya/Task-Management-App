import "../DetailsPopup/style.css"
import Profile from "../Profile"


const detailsPopupData = [
    {
        assigner: "Assignee",
        profile: "Brooklyn Simmons",
    },
    {
        assigner: "Reporter",
        profile: "Brooklyn Simmons",
    },
    {
        assigner: "Reporter",
        profile: "Brooklyn Simmons",
    },
]

export default function DetailsPopup(props: any) {
    const { isOpen, onClose } = props;
    return (
        <>
            {isOpen &&
                <div className="details-popup">
                    {detailsPopupData.map((items) => {
                        return (

                            <div className="details-content flex ai-center jc-spaceBetween " onClick={onClose}>
                                <span className="fs-18 fw-400">{items.assigner}</span>
                                <div className="details-profile flex ai-center gap-10">
                                    <Profile />
                                    <span className="fs-16 fw-400" >{items.profile}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
        </>
    )
}