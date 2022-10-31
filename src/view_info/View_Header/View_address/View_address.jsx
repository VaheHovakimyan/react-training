import { useSelector } from "react-redux";
import { selectAddress } from "../../../Features/Header/Address_slice";
import address_icon from '../../../Resume_backgrounds/image_3.png';
import '../View_Header.scss';
// import './View_address.scss';


export default function View_address(){

    const address = useSelector(selectAddress);

    // const address = useSelector((state) => {
    //     return state.address.address
    // })

    return(
        <div className="view_contact_element">
            <img src={address_icon} alt="address_icon" width="15px" height="15px" className="contact_icon"/>
            <p className="view_contact_element_text">{address}</p>
        </div>
    )
}