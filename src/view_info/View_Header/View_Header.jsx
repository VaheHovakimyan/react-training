import View_name_surname from './View_name_surname/View_name_surname.jsx';
import View_Image_header from './View_Image_header/View_Image_header.jsx';
import View_mail from './View_mail/View_mail.jsx';
import View_tel from './View_tel/View_tel.jsx';
import View_address from './View_address/View_address.jsx';
import './View_Header.scss';


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