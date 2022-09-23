import { useSelector } from "react-redux";
import address_icon from '../../../Resume_backgrounds/image_3.png';
import '../View_Header.scss';
// import './View_address.scss';


export default function View_address(){

    const address = useSelector((state) => {
        return state.address.address
    })

    return(
        <div className="view_contact_element">
            <img src={address_icon} alt="address_icon" width="15px" height="15px"/>
            <p>{address}</p>
        </div>
    )
}