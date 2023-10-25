import "../Header/style.css"
import Profile from "../Profile"

export default function Header() {
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
            <button className="search-bg-img">
                {/* <img className="uil uil-search" src="assets/icon/Search.svg"/> */}
            </button>
            <div className="right-content flex  ">
                <div className="ball-icon br-8 flex ai-center  jc-center">
                    <img alt="Notification" className="notification-img" src="assets/icon/Notification.svg" />
                </div>
                <Profile />
            </div>
        </div>
    )
}