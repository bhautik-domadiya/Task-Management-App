import "../Header/style.css"

export default function Header() {
    return (
        <div className="flex jc-spaceBetween ai-center">
            <div className="">
                <span className="header-logo fw-700 fs-30"> LOGO</span>
            </div>
            <div className="header-tab flex">
                <span className="fw-500 fs-20" >Projects</span>
                <span className="fw-500 fs-20">Priority</span>
            </div>
            <div className="right-content flex  ">
                <div className="input-box">
                    <i className="uil uil-search">X</i>
                    <input type="text" placeholder="Search here..." />
                </div>
                <div className="ball-icon br-8 flex ai-center  jc-center">
                    <img width="30px" height="30px" src="assets/icon/Notification.svg" />
                </div>
                <div className="ball-icon br-8 flex ai-center  jc-center">
                    <span className="fs-30 fw-700">B</span>
                </div>
            </div>
        </div>
    )
}