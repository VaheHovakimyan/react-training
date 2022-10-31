import { useSelector } from "react-redux";
import { selectTel } from "../../../Features/Header/Tel_slice";
import tel_icon from '../../../Resume_backgrounds/image_3.png';
import '../View_Header.scss';
// import './View_tel.scss';


export default function View_tel() {

    // const tel = useSelector((state) => {
    //     return state.tel.tel
    // })

    const tel = useSelector(selectTel); 

    return (
        <div className="view_contact_element">
            <img src={tel_icon} alt="address_icon" width="15px" height="15px" className="contact_icon"/>
            <p className="view_contact_element_text">{tel}</p>
        </div>
    )
}