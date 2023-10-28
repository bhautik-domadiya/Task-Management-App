import React from "react";
import Header from "../../component/Coman/Header";
import LeftSection from "../../component/LeftSection";
import RightSection from "../../component/RightSection";

const TaskBoard = () => {
    return (<>
     <div className='header-css px-30 py-20' >
        <Header />
      </div>
      <div className='main-section flex'>
      <div className='main-LeftSection '>
            <LeftSection />
          </div>
          <div className='main-RightSection '>
            <RightSection />
          </div>
      </div>
    </>)
}

export default TaskBoard;