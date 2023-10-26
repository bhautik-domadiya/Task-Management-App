import { useState } from "react"
import BoardCard from "../Coman/BoardCard"
import MobileView from "../Coman/MobileView"
import "../LeftSection/style.css"
import { CustomModal } from "../modal/CardModel/CardModal"
import { AddTaskModel } from "../modal/AddTaskModel"


const boardHeading = [
    {
        id: 1,
        heading: "To Do ",
        totalNo: "3"
    },
    {
        id: 2,
        heading: "In Progress ",
        totalNo: "2"
    },
    {
        id: 3,
        heading: "Done ",
        totalNo: "1"
    },
]



export default function LeftSection() {
    const [showModal, setShowModal] = useState(false);
    const [showTaskModal, setShowTaskModal] = useState(false);
    const openTaskModel = () => {
        setShowTaskModal(true)
    }
    const closeTaskModel = () => {
        setShowTaskModal(false)
    }

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
                        <img className="user-coman user-img1" alt="user Img" src="assets/userImg/user1.png" />
                        <img className="user-coman user-img2" alt="user2 Img" src="assets/userImg/user2.png" />
                        <img className="user-coman user-img3" alt="user3 Img" src="assets/userImg/user3.png" />
                        <div className="user-coman user-add flex jc-center ">
                            <button className="user-coman user-add flex jc-center  fs-20 fw-600"><span className="button-text">+</span></button>
                        </div>
                    </div>
                </div>
                <div className="board-all-card flex">
                    <div className="board-card-all flex">
                        {boardHeading.map((items) => {
                            return (
                                <BoardCard key={items.id} id={items.id} onModelOpen={openTaskModel} onClick={openModal} heading={items.heading} totalNo={items.totalNo} />
                            )
                        })}
                    </div>
                </div>
                <div className="mobile-card">
                    <MobileView />
                    <BoardCard onModelOpen={openTaskModel} onClick={openModal} heading="To Do" totalNo="3" />
                </div>
            </div>
            <AddTaskModel isOpen={showTaskModal} handleCloseModel={closeTaskModel} />
            <CustomModal show={showModal} handleClose={closeModal} />
        </>
    )
}