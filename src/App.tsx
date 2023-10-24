import { useState } from 'react';
import './App.css';
import Header from './component/Coman/Header';
import LeftSection from './component/LeftSection';
import RightSection from './component/RightSection';
import { CustomModal } from './component/modal/CardModal'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
// ]);

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  return (
    <div>
        {/* <button onClick={openModal}>Open Modal</button> */}
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
        <CustomModal show={showModal} handleClose={closeModal} />
    </div>
  );
}

export default App;
