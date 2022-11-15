import View_name_surname from './View_name_surname/ViewNameSurname.jsx';
import View_Image_header from './View_Image_header/ViewImageHeader.jsx';
import View_mail from './View_mail/ViewMail.jsx';
import View_tel from './View_tel/ViewTel.jsx';
import View_address from './View_address/ViewAddress.jsx';
import './ViewHeader.scss';


export default function View_Header({profileImg, setProfileImg}) {
    return (
        <div className='view_header'>
            <div className='view_header_div'>
                <View_Image_header 
                    profileImg={profileImg}
                    setProfileImg={setProfileImg}
                />
                <div className='name_mail_tel_address_div'>
                    <View_name_surname />
                    <View_mail />
                    <View_tel />
                    <View_address />
                </div>
            </div>
        </div>
    )
}