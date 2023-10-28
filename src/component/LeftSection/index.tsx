import { useEffect, useMemo, useState } from "react"
import BoardCard from "../Coman/BoardCard"
import MobileView from "../Coman/MobileView"
import "../LeftSection/style.css"
import { CustomModal } from "../modal/CardModel/CardModal"
import {AddTaskModel} from "../modal/AddTaskModel"
import fetchTaskList from "../../firebase/queries/getTaskList"
import { useUserContext } from "../../context/provider"
import { TaskData } from "../../utils/tasks.inteface"
import { IPriorityList, taskTypes } from "../../utils/constants"
import { updateStatus } from "../../firebase/queries/updateTask"

export default function LeftSection() {
    const {data : userData} = useUserContext();
    const [showModal, setShowModal] = useState(false);
    const [showTaskModal, setShowTaskModal] = useState(false);
    const [taskList,setTaskList] = useState<TaskData[] | null>(null);
    const [taskData,setTaskData] = useState<TaskData | null>(null);
    const [selectedTab,setSelectedTab] = useState<string>(taskTypes?.todo);
    const openTaskModel = () => {
        setShowTaskModal(true)
    }
    const closeTaskModel = () => {
        setShowTaskModal(false);
    }

    const openModal = (taskItem:TaskData | null) => {
        setShowModal(true);
        setTaskData(taskItem);
    };

    const closeModal = () => {
        setShowModal(false);
        setTaskData(null);
    };

    const getTaskListResponse = () => {
        fetchTaskList().then((res)=>{
            if(res){
                setTaskList(res)
            }
            }).catch((err)=>{
                setTaskList([]);
            });
    }

    useEffect(()=>{
        getTaskListResponse();
    },[]);

    const getTaskList = (data: TaskData[] | null) => {
        const tasksByCardType: { [key: string]: TaskData[] } = {}; // Index signature added
      
        Object.keys(taskTypes).forEach((cardType) => {
          tasksByCardType[cardType] = [];
        });
      
        if (data) {
          data.forEach((task) => {
            for (const cardType in taskTypes) {
              if (task.status === taskTypes[cardType]) {
                tasksByCardType[cardType].push(task);
                break;
              }
            }
          });
        }
        return tasksByCardType;
      };

    const boardRask = useMemo(()=>{
        return getTaskList(taskList)
    },[taskList]);

    const handleUpdatePriority = (selectedPriority:IPriorityList | null) => {
        if(taskData && selectedPriority){
            const payload = {
                priority:selectedPriority.value
            }
            updateStatus(taskData.id,payload).then((res)=>{
                getTaskListResponse();
            }).catch((err)=>{
                alert(err);
            })
        }
    }

    const updateTaskStatus = (value:string) =>{
        if(taskData){
            const payload = {
                status:value,
                updatedAt: Number(new Date().getTime()),
            }
            updateStatus(taskData.id,payload).then((res)=>{
                getTaskListResponse();
            }).catch((err)=>{
                alert(err);
            })
        }
       
    }

    const handleMoboleTab = (type:string) => {
        setSelectedTab(type)
    }

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
                        
                    {Object.keys(boardRask).map((cardType,index) => {
                        return (
                            <BoardCard
                                onModelOpen={() => openTaskModel()}
                                onClick={(taskItem:TaskData | null)=>openModal(taskItem)}
                                heading={cardType}
                                key={`${cardType}-web`}
                                isAdmin={userData?.role}
                                taskList={boardRask[cardType] || []}
                                cardIndex={index}
                            />
                        );
                    })}
                    </div>
                </div>
                <div className="mobile-card">
                    <MobileView handleSelect={(type:string)=>handleMoboleTab(type)} selectedTab={selectedTab}/>
                    <BoardCard 
                         onModelOpen={()=>openTaskModel()} 
                         onClick={(taskItem:TaskData | null)=>openModal(taskItem)}
                         isAdmin={userData?.role}
                         taskList={boardRask[selectedTab.toLocaleLowerCase()]}
                         heading={selectedTab.toLocaleLowerCase()}
                         cardIndex={selectedTab === taskTypes?.todo ? 0 : 1}
                         key={`${selectedTab}-mobile`}
                    />
                </div>
            </div>
            {showTaskModal 
                && 
                    <AddTaskModel 
                        isOpen={showTaskModal} 
                        handleCloseModel={closeTaskModel}
                        fetchList={getTaskListResponse}
                        />
                    }
            {showModal && 
                <CustomModal 
                    show={showModal} 
                    handleClose={closeModal} 
                    taskITem={taskData}
                    handleUpdatePriority={(value:IPriorityList | null)=>handleUpdatePriority(value)}
                    updateTaskStatus={(value:string)=>updateTaskStatus(value)}
                />}
        </>
    )
}