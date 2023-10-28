import { useEffect } from "react";
import "../Header/style.css"
import Profile from "../Profile"
import { checkAuth } from "../../../firebase/auth";
import { useUserContext } from "../../../context/provider";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const { updateData } = useUserContext();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location) {
            checkAuth(navigate)
                .then((userData) => {
                    if (userData) updateData(userData);
                })
                .catch((err: any) => {
                    console.log('Error', err);
                });
        }
    }, [location]);


    const handleLogout = () => {
        updateData(null);
        navigate('/');
    }

    return (
        <div className="flex jc-spaceBetween ai-center">
            <div className="">
                <span className="header-logo fw-700 fs-30"> LOGO</span>
            </div>
            <div className="header-tab flex">
                <div className="input-box">
                    <input type="text" placeholder="Search here..." />
                </div>
            </div>
            <div className="flex gap-5">
                <button className="search-bg-img"/>
                <div className="mobile-user-profile">
                    <Profile />
                    <div className="mobile-log-out" onClick={()=>handleLogout()}>
                        <span>{`>`}</span>
                    </div>
                </div>
            </div>    
            <div className="right-content flex  ">
                <div className="ball-icon br-8 flex ai-center  jc-center">
                    <img alt="Notification" className="notification-img" src="assets/icon/Notification.svg" />
                </div>
                <Profile />
                <div className="ball-icon br-8 flex ai-center  jc-center" onClick={() => handleLogout()}>
                    <span className="header-logo fw-400 fs-12 p-10 cursor-pointer"> SIGN-OUT</span>
                </div>
            </div>
        </div>
    )
}