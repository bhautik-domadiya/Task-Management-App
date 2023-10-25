import { useState } from 'react';
import PriorityPopup from '../../Coman/PriorityPopup';
import './styles.css';
import ToDoPopup from '../../Coman/ToDoPopup';
import DetailsPopup from '../../Coman/DetailsPopup';
import Profile from '../../Coman/Profile';

interface CustomModalProps {
    show: boolean;
    handleClose: () => void;
}


export const CustomModal: React.FC<CustomModalProps> = ({ show, handleClose }) => {
    const modalStyle: React.CSSProperties = {
        display: show ? 'block' : 'none',
    };
    const overlayStyle: React.CSSProperties = {
        display: show ? 'block' : 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.30)',
        zIndex: 1000,
    };

    const [isPopupOpen, setPopupOpen] = useState(false);
    const [isToDoOpen, setToDoOpen] = useState(false);
    const [isDetails, setDetails] = useState(false);
    const [isSelect , setIsSelect] = useState(  {
        id: 1,
        image: "assets/icon/verylow.svg",
        name: "Very Low"
    })

    const toggle = () => {
        setPopupOpen(!isPopupOpen)
    }
    const toggleToDo = () => {
        setToDoOpen(!isToDoOpen)
    }
    const toggleDetails = () => {
        setDetails(!isDetails)
    }

    return (<>
        <div className="overlay" style={overlayStyle}></div>

        <div className="modal" style={modalStyle} >

            <div className="modal-content">
                <div className='card-wrapper'>
                    <div className='card-description'>
                        <div className='close-icon close-mobile flex' onClick={() => handleClose()}>
                            <span className='fs-20 fw-600'  >x</span>
                        </div>
                        <div className='card-description-header'>
                            <div className='card-label'><span className='label'>Nangita</span></div>
                            <span className='card-date-label'>Due Date : 19 Oct, 2023</span>
                        </div>
                        <div className='filter-section'>
                            <div className="description-lable">
                                <span className='label fs-18 fw-500'>Description</span>
                                <img alt='edit-img' className='edit' src="assets/icon/Edit.png" />
                            </div>
                            <div className='drop-down'>
                                <div className="filter-drop-down" >
                                    <div onClick={toggle} className='task-card-model flex gap-10 ai-center' >
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
                            <p className='description'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                                it to make a type specimen book. It has survived not only five centuries.
                            </p>
                        </div>
                        {/* <div className='comment-section'>
                            <span className='comment-section-label'>Comments</span>
                            <div className='comment-section-input'>
                                <Profile />
                                <div className='comment-section-input-field'>
                                    <div className="input-send-box">
                                        <div className='send-button'>
                                            <img alt='send-img' className="uil uil-search" src="assets/icon/Send.svg" />
                                        </div>
                                        <input type="text" placeholder="Search here..." />
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className='card-info-section'>
                            <Profile />
                            <div className='card-info-details'>
                                <div className='card-user-info-details'>
                                    <span className='user-name'>Brooklyn Simmons</span>
                                    <span className='time'>4 minutes ago</span>
                                </div>
                                <div className='card-user-info-sample-text'>
                                    <span>Lorem Ipsum is simply dummy text.</span>
                                </div>
                                <div className='card-user-info-action-btn'>
                                    <div className='action-btn' >
                                        <img src="assets/icon/Edit-img.svg" alt="edit" />
                                    </div>
                                    <div className='action-btn delete' >
                                        <img src="assets/icon/delete.svg" alt="delete" />
                                    </div>
                                    <div className='action-btn emoji' >
                                        <img src="assets/icon/emoji-smile.svg" alt="emoji" />
                                    </div>

                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className='card-details'>
                        <div className='close-icon colse-display flex' onClick={() => handleClose()}>
                            <span className='fs-20 fw-600'  >x</span>
                        </div>
                        <div className='drop-down'>
                            <div className='to-do-drop-down-section' onClick={toggleToDo}>
                                <span className='fs-18 fw-400   ' >To Do</span>
                                <img className={isToDoOpen ? 'down' : ''} src="assets/icon/down.svg" alt="" />
                            </div>
                            <ToDoPopup isOpen={isToDoOpen} onClose={() => setToDoOpen(false)} />
                        </div>
                        <div className='detailsdrop-down-section'>
                            <div className='detailsdrop-down' onClick={toggleDetails}>
                                <span className='fs-20 fw-400s'>Details</span>
                                <img className={isDetails ? 'down' : ''} src="assets/icon/down.svg" alt="" />
                            </div>
                            <div><DetailsPopup isOpen={isDetails} onClose={() => setDetails(false)} /></div>
                        </div>
                        <div className='log-time-checker'>
                            <span className='time'>Created 2 hour ago</span>
                            <span className='time'>Created 2 hour ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
};