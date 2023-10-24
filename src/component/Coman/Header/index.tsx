import "../Header/style.css"

export default function Header() {
    return (
        <div className="flex jc-spaceBetween ai-center">
            <div className="">
                <span className="header-logo fw-700 fs-30"> LOGO</span>
            </div>
            <div className="header-tab flex">
                <div className="input-box">
                    {/* <img className="uil uil-search" src="assets/icon/Search.svg"/> */}
                    <input type="text" placeholder="Search here..." />
                </div>
            </div>

                <button className="search-bg-img">
{/* <img className="uil uil-search" src="assets/icon/Search.svg"/> */}
                </button>
            <div className="right-content flex  ">
                <div className="ball-icon br-8 flex ai-center  jc-center">
                    <img className="notification-img" src="assets/icon/Notification.svg" />
                </div>
                <div className="ball-icon br-8 flex ai-center  jc-center">
                    <span className="fs-26 fw-700">B</span>
                </div>
            </div>
        </div>
    )
}