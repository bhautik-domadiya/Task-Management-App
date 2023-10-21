import './App.css';
import Header from './component/Coman/Header';
import LeftSection from './component/LeftSection';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
// ]);

function App() {
  return (
    <div>
      <div className='header-css px-30 py-35' >
        <Header />
      </div>
      <div className='flex'>
        <div className='main-LeftSection'>
          <LeftSection />
        </div>
      </div>
    </div>
    // <React.StrictMode>
    //   <RouterProvider router={router} />
    // </React.StrictMode>
  );
}

export default App;
