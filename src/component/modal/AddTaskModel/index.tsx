import React, { useEffect, useRef, useState } from "react";
import "../AddTaskModel/style.css"
import PriorityPopup from "../../Coman/PriorityPopup";
import ToDoPopup from "../../Coman/ToDoPopup";

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
    const [isToDo, setToDo] = useState({
        id: 1,
        name: "To Do"
    })
    const [isToDoOpen, setToDoOpen] = useState(false);
    const overlayRef = useRef<HTMLDivElement | null>(null);

    const toggle = () => {
        setPopupOpen(!isPopupOpen)
    }

    const toggleToDo = () => {
        setToDoOpen(!isToDoOpen)
    }


    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (overlayRef.current && event.target instanceof Node && !overlayRef.current.contains(event.target)) {
                setPopupOpen(false);
            }
        }
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div>
            <div className="overlay-task" style={overlayModelStyle}></div>
            <div className="modal" style={modalStyle} >

                <div className="task-modal-content">
                    <div className='task-card-wrapper'>
                        <div className='close-icon create-task  colse-display flex' >
                            <div>
                                <span className="cteate-task-text fs-20 fw-500">Create Task</span>
                            </div>
                            <div className="close-icon cursor-pointer create-task  colse-display " onClick={() => handleCloseModel()}>
                                <span className=' fs-20 fw-600'  >x</span>
                            </div>

                        </div>
                        <div className='task-card-description'>

                            <div className='close-icon close-mobile flex' onClick={() => handleCloseModel()}>
                                <span className='fs-20 fw-600'  >x</span>
                            </div>
                            <div className='task-card-description-header'>
                                <div className="add-name-data">
                                    <span className='label task-name fs-16 fw-500'>Project Name</span>
                                    <div>
                                        <input className="add-input-fild" type="text" placeholder="Project name " />
                                    </div>
                                </div>
                                <div className="add-date">
                                    <div className="due-date-aline">
                                        <span className='card-date-label fs-18 fw-500'>Due Date</span>
                                    </div>
                                    <input className="add-input-fild" type="date" />
                                </div>
                            </div>

                            <div className='description-section'>
                                <div className="task-description-lable">
                                    <span className='label fs-14 fw-500'>Description</span>
                                    <img alt='edit-img' className='add-description' src="assets/icon/Edit.png" />
                                </div>
                                <textarea className="textarea-input">

                                </textarea>
                            </div>
                            <div className='task-filter-section'>
                                <div className='drop-down add-data' ref={overlayRef}>
                                    <div className="add-data">
                                        <span className=" fs-14 fw-500" >To Do</span>
                                    </div>
                                    <div className='to-do-drop-down-section-data' onClick={toggleToDo}>
                                        <span className='fs-18 fw-400' >{isToDo.name}</span>
                                        <img className={isToDoOpen ? 'down' : ''} src="assets/icon/down.svg" alt="" />
                                    </div>
                                    <ToDoPopup setToDo={setToDo} isOpen={isToDoOpen} onClose={() => setToDoOpen(false)} />
                                </div>
                                <div className='drop-down add-data' ref={overlayRef} >
                                    <div className="priority-lable">
                                        <span className=" fs-14 fw-500">Prority</span>
                                    </div>
                                    <div onClick={toggle} className="filter-drop-down-data" >
                                        <div className='flex gap-10 ai-center' >
                                            <div>
                                                <img alt='upArrow' src={isSelect.image} />
                                            </div>
                                            <span className='fs-18 fw-400'>{isSelect.name}</span>
                                        </div>
                                        <div style={{ cursor: "pointer" }}>
                                            <img className={isPopupOpen ? 'rotate' : ''} alt='Stroke' src='assets/icon/down.svg' />
                                        </div>
                                    </div>
                                    <PriorityPopup isOpen={isPopupOpen} setIsSelect={setIsSelect} onClose={() => setPopupOpen(false)} />
                                </div>
                            </div>
                            <div className="add-remove-button">
                                <button onClick={() => handleCloseModel()}>Cancel</button>
                                <button>Create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}