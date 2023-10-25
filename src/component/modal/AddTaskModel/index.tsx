import React, { useState } from "react";
import "../AddTaskModel/style.css"
import PriorityPopup from "../../Coman/PriorityPopup";

interface CustomModalProps {
    isOpen: boolean;
    handleCloseModel: () => void;
}

export const AddTaskModel: React.FC<CustomModalProps> = ({ isOpen, handleCloseModel }) => {

    const modalStyle: React.CSSProperties = {
        display: isOpen ? 'block' : 'none',
    };

    const overlayModelStyle: React.CSSProperties = {
        display: isOpen ? 'block' : 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.30)',
        zIndex: 1000,
    };
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [isSelect, setIsSelect] = useState({
        id: 1,
        image: "assets/icon/verylow.svg",
        name: "Very Low"
    })

    const toggle = () => {
        setPopupOpen(!isPopupOpen)
    }

    return (
        <div>
            <div className="overlay-task" style={overlayModelStyle}></div>
            <div className="modal" style={modalStyle} >

                <div className="task-modal-content">
                    <div className='task-card-wrapper'>
                        <div className='close-icon colse-display flex' onClick={() => handleCloseModel()}>
                            <span className='fs-20 fw-600'  >x</span>
                        </div>
                        <div className='task-card-description'>

                            <div className='close-icon close-mobile flex' onClick={() => handleCloseModel()}>
                                <span className='fs-20 fw-600'  >x</span>
                            </div>
                            <div className='task-card-description-header'>
                                <span className='label task-name'>Nangita</span>
                                <span className='card-date-label'>Due Date : 19 Oct, 2023</span>
                            </div>
                            <div className='task-filter-section'>
                                <div className="task-description-lable">
                                    <span className='label fs-18 fw-500'>Description</span>
                                    <img alt='edit-img' className='edit' src="assets/icon/Edit.png" />
                                </div>
                                <div className='drop-down'>
                                    <div className="filter-drop-down" >
                                        <div onClick={toggle} className='flex gap-10 ai-center' >
                                            <div>
                                                <img alt='upArrow' src={isSelect.image} />
                                            </div>
                                            <span className='fs-18 fw-400'>{isSelect.name}</span>
                                        </div>
                                        <div style={{ cursor: "pointer" }}>
                                            <img className={isPopupOpen ? 'rotate' : ''} alt='Stroke' src='assets/icon/Stroke.svg' />
                                        </div>
                                    </div>
                                    <PriorityPopup isOpen={isPopupOpen} setIsSelect={setIsSelect} onClose={() => setPopupOpen(false)} />
                                </div>
                            </div>
                            <div className='description-section'>
                                <p className='task-description'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                                    it to make a type specimen book. It has survived not only five centuries.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}