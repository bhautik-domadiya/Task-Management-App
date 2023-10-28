import "../Profile/style.css"
import { useUserContext } from "../../../context/provider";


export default function Profile() {
    const {data:userData} = useUserContext();
    return (
        <div className="profile-icon br-8 flex ai-center  jc-center">
            <span className="fs-26 fw-700">{userData ? userData.name.charAt(0) :''}</span>
        </div>
    )
}