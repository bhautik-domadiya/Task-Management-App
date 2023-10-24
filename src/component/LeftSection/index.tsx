import { useState } from "react"
import BoardCard from "../Coman/BoardCard"
import MobileView from "../Coman/MobileView"
import "../LeftSection/style.css"
import { CustomModal } from "../modal/CardModal"


const boardHeading = [
    {
        id: 1,
        heading: "To Do ",
        totalNo: "3"
    },
    {
        id: 1,
        heading: "In Progress ",
        totalNo: "2"
    },
    {
        id: 1,
        heading: "Done ",
        totalNo: "1"
    },
]



export default function LeftSection() {
    const [showModal, setShowModal] = useState(false);

const openModal = () => {
  setShowModal(true);
};

const closeModal = () => {
  setShowModal(false);
};
    return (
        <>
        <div className="board-main">
            <div className=" board-section flex jc-spaceBetween" >
                <span className="mobile-change fs-30 fw-700" >Board</span>
                <div className="user flex ai-center">
                    <img className="user-coman user-img1" alt="user-Image" src="assets/userImg/user1.png" />
                    <img className="user-coman user-img2" alt="user-Image" src="assets/userImg/user2.png" />
                    <img className="user-coman user-img3" alt="user-Image" src="assets/userImg/user3.png" />
                    <div className="user-coman user-add flex jc-center ">
                        {/* <span className="fs-30 fw-600"> +</span> */}
                        <button className="user-coman user-add flex jc-center  fs-30 fw-600"><span className="button-text">+</span></button>
                    </div>
                </div>
            </div>
            <div className="board-all-card flex">
                <div className="board-card-all flex">
                    {boardHeading.map((items) => {
                        return (
                            <BoardCard onClick={openModal} heading={items.heading} totalNo={items.totalNo} />
                        )
                    })}
                </div>
            </div>
            <div className="mobile-card">
                <MobileView/>
                 <BoardCard onClick={openModal} heading="To Do" totalNo="3" />
            </div>
        </div>
           <CustomModal  show={showModal} handleClose={closeModal} />
           </>
    )
}