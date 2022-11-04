import { useSelector } from "react-redux";
import { selectMail } from "../../../Features/Header/MailSlice";
import mail_icon from '../../../Resume_backgrounds/image_3.png';
import '../ViewHeader.scss';
// import './View_mail.scss';


export default function View_mail(){

    // const mail = useSelector((state) => {
    //     return state.mail.mail
    // });

    const mail = useSelector(selectMail);

    return(
        <div className="view_contact_element">

            <img src={mail_icon} alt="mail_icon" width="15px" height="15px" className="contact_icon"/>
            <p className="view_contact_element_text">{mail}</p>
        </div>
    )
}