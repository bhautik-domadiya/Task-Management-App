import React from "react";
import { createBrowserRouter} from 'react-router-dom';
import Login from "../pages/login/login";
import TaskBoard from "../pages/taskBoard/task-board";

// const NavigationRouter = () =>{
//   return <>
//  <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="board" element={<TaskBoard />} />
//       </Routes>
//     </Router>
//   </>
// };

// export default NavigationRouter;
export const router = createBrowserRouter([
  {
    element: <Login />,
    path: "/",
  },
  {
    element: <TaskBoard />,
    path: "board",
  },
]);