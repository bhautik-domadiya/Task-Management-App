import { useEffect, useRef, useState } from 'react';
import PriorityPopup from '../../Coman/PriorityPopup';
import './styles.css';
import ToDoPopup from '../../Coman/ToDoPopup';
import { TaskData } from '../../../utils/tasks.inteface';
import { formatDueDateFromTimestamp, formatTimeAgo } from '../../../utils/date.formate';
import { IPriorityList, IToDoList, priorityList, todoData } from '../../../utils/constants';

interface CustomModalProps {
    show: boolean;
    handleClose: () => void;
    taskITem: TaskData | null,
    handleUpdatePriority: (value: IPriorityList | null) => void;
    updateTaskStatus: (value: string) => void;
}

const defaultPriority = {
    id: 1,
    image: "assets/icon/verylow.svg",
    name: "Very Low",
    value: 'VERYLOW'
}


export const CustomModal: React.FC<CustomModalProps> = ({ show, handleClose, taskITem, handleUpdatePriority, updateTaskStatus }) => {
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
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [isToDoOpen, setToDoOpen] = useState(false);
    const [isSelect, setIsSelect] = useState<IPriorityList | null>(defaultPriority);
    const [selectedStatus, setSelectedStatus] = useState<string>('');
    const [updateTime, setUpdateTime] = useState<string>('');
    const toggle = () => {
        setPopupOpen(!isPopupOpen)
    }
    const toggleToDo = () => {
        setToDoOpen(!isToDoOpen)
    }

    const handleSelect = (value: IPriorityList | null) => {
        setIsSelect(value);
        handleUpdatePriority(value)
    }

    const handleTaskStatus = (value: IToDoList) => {
        setSelectedStatus(value.name);
        updateTaskStatus(value.value);
        const time = new Date().getTime().toString();
        setUpdateTime(time);
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (overlayRef.current && event.target instanceof Node && !overlayRef.current.contains(event.target)) {
                
                if(isToDoOpen){
                    setToDoOpen(false);
                }
                if(isPopupOpen){
                    setPopupOpen(false);
                }
                
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isPopupOpen,isToDoOpen]);



    useEffect(() => {
        if (taskITem) {
            const getItem = priorityList.find((findItem) => findItem.value === taskITem.priority);
            const todoList = todoData.find((fintItem) => fintItem.value === taskITem.status);
            if (getItem) {
                setIsSelect(getItem);
            }
            if (todoList) {
                setSelectedStatus(todoList.name);
            }
        }
    }, [taskITem]);


    useEffect(() => {
        if (taskITem && taskITem.updatedAt) {
            setUpdateTime(taskITem.updatedAt);
        }
    }, [taskITem]);

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
                            <div className='card-label'><span className='label'>{taskITem?.title || ''}</span></div>
                            <span className='card-date-label'>Due Date : {taskITem ? formatDueDateFromTimestamp(taskITem?.dueDate) : '-'}</span>
                        </div>
                        <div className='filter-section'>
                            <div className="description-lable">
                                <span className='label fs-18 fw-500'>Description</span>
                                <img alt='edit-img' className='edit' src="assets/icon/Edit.png" />
                            </div>
                            <div className='drop-down' ref={overlayRef}>
                                <div className="filter-drop-down" >
                                    <div onClick={toggle} className='task-card-model flex gap-10 ai-center' >
                                        <div>
                                            <img alt='upArrow' src={isSelect ? isSelect.image : ''} />
                                        </div>
                                        <span className='fs-18 fw-400'>{isSelect ? isSelect.name : ''}</span>
                                    </div>
                                    <div style={{ cursor: "pointer" }}>
                                        <img className={isPopupOpen ? 'rotate' : ''} alt='Stroke' src='assets/icon/Stroke.svg' />
                                    </div>
                                </div>
                                <div >
                                    <PriorityPopup
                                        isOpen={isPopupOpen}
                                        setIsSelect={setIsSelect}
                                        handleSelect={handleSelect}
                                        onClose={() => setPopupOpen(false)}
                                    />
                                </div>

                            </div>
                        </div>
                        <div className='description-section'>
                            <p className='description'>
                                {taskITem?.description || ''}
                            </p>
                        </div>

                    </div>
                    <div className='card-details' >
                        <div className='close-icon colse-display flex' onClick={() => handleClose()}>
                            <span className='fs-20 fw-600'  >x</span>
                        </div>
                        <div className='drop-down' ref={overlayRef}>
                            <div className='to-do-drop-down-section' onClick={toggleToDo}>
                                <span className='fs-18 fw-400   ' >{selectedStatus}</span>
                                <img className={isToDoOpen ? 'down' : ''} src="assets/icon/down.svg" alt="" />
                            </div>
                            <ToDoPopup
                                isOpen={isToDoOpen}
                                onClose={() => setToDoOpen(false)}
                                handleTaskStatus={(value: IToDoList) => handleTaskStatus(value)}
                            />
                        </div>
                        <div className='log-time-checker'>
                            <span className='time'>Created {taskITem ? formatTimeAgo(taskITem.createdAt) : '-'}</span>
                            <span className='time'>Updated {taskITem?.updatedAt ? formatTimeAgo(Number(updateTime)) : '-'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
};