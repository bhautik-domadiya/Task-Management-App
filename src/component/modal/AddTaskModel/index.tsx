import React, { useEffect, useRef, useState } from "react";
import "../AddTaskModel/style.css"
import PriorityPopup from "../../Coman/PriorityPopup";
import ToDoPopup from "../../Coman/ToDoPopup";
import { newDateToTimestamp } from "../../../utils/date.formate";
import { IPriorityList, IToDoList } from "../../../utils/constants";
import { addTask } from "../../../firebase/queries/insertTask";
import { useUserContext } from "../../../context/provider";

interface CustomModalProps {
    isOpen: boolean;
    handleCloseModel: () => void;
    fetchList: () => void;
}

interface IInputField {
    title: string;
    description: string;
    dueDate: string
}


const defaultStatus = {
    id: 1,
    name: "To Do",
    value: 'TODO'
}

const defaultPriority = {
    id: 1,
    image: "assets/icon/verylow.svg",
    name: "Very Low",
    value: "VERYLOW"
}
export const AddTaskModel: React.FC<CustomModalProps> = ({ isOpen, handleCloseModel, fetchList }) => {
    const { data: currentUserData } = useUserContext();
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
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [inputField, setinputField] = useState<IInputField | null>(null);
    const [isSelect, setIsSelect] = useState<IPriorityList | null>(defaultPriority)
    const [isToDo, setToDo] = useState<IToDoList>(defaultStatus)
    const [isToDoOpen, setToDoOpen] = useState(false);

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


    const resetValues = () => {
        setIsSelect(defaultPriority);
        setToDo(defaultStatus);
        setinputField(null);
        handleCloseModel();
    }

    const handleSubmit = () => {
        if(inputField?.title === ''){
            alert('please Enter task title')
        }else if (inputField?.description === ''){
            alert('please Enter task description')
        }else if (inputField?.dueDate === ''){
            alert('please Enter due-date')
        }else {
            if (inputField) {
                const specifiedDate: any = new Date(inputField?.dueDate);
    
                const payload = {
                    ...inputField,
                    dueDate: Number(inputField?.dueDate ? newDateToTimestamp(specifiedDate) : new Date().getTime()),
                    status: isToDo.value,
                    priority: isSelect?.value,
                    createdAt: Number(new Date().getTime()),
                    assignee: currentUserData?.id || ""
                }
                
                addTask(payload).then((res)=>{
                    fetchList();
                    resetValues();
                }).catch((erro)=>{
                    alert("list not added");
                })
            }
        }
        
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setinputField((prev) => ({
            ...prev,
            [name]: value
        }) as IInputField);
    };


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
                                    <span className='label task-name fs-16 fw-500'>Task Name</span>
                                    <div>
                                        <input
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                                            name="title"
                                            className="add-input-fild"
                                            type="text"
                                            placeholder="Task name"
                                            value={inputField?.title}
                                        />
                                    </div>
                                </div>
                                <div className="add-date">
                                    <div className="due-date-aline">
                                        <span className='card-date-label fs-18 fw-500'>Due Date</span>
                                    </div>
                                    <input
                                        name="dueDate"
                                        className="add-input-fild"
                                        type="date"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                                        value={inputField?.dueDate}
                                    />
                                </div>
                            </div>

                            <div className='description-section'>
                                <div className="task-description-lable">
                                    <span className='label fs-14 fw-500'>Description</span>
                                    <img alt='edit-img' className='add-description' src="assets/icon/Edit.png" />
                                </div>
                                <textarea
                                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange(e)}
                                    className="textarea-input"
                                    name="description"
                                    value={inputField?.description}
                                />
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
                                                <img alt='upArrow' src={isSelect?.image} />
                                            </div>
                                            <span className='fs-18 fw-400'>{isSelect?.name}</span>
                                        </div>
                                        <div style={{ cursor: "pointer" }}>
                                            <img className={isPopupOpen ? 'rotate' : ''} alt='Stroke' src='assets/icon/down.svg' />
                                        </div>
                                    </div>
                                    <PriorityPopup
                                        isOpen={isPopupOpen}
                                        setIsSelect={(value) => setIsSelect(value)}
                                        onClose={() => setPopupOpen(false)}
                                    />
                                </div>
                            </div>
                            <div className="add-remove-button">
                                <button onClick={() => handleCloseModel()}>Cancel</button>
                                <button onClick={() => handleSubmit()}>Create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}