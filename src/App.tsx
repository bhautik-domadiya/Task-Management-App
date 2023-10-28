import './App.css';
import {RouterProvider} from "react-router-dom"; 
import { router } from './routes/route';
import { UserProvider } from './context/provider';

const  App = () =>{  
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>

  );
}

export default App;
