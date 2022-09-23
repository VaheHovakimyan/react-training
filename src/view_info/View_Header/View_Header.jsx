import View_name_surname from './View_name_surname/View_name_surname.jsx';
import View_Person_Image from './View_Pesron_Image/View_Person_Image.jsx';
import View_Mail from './View_mail/View_mail.jsx';
import View_tel from './View_tel/View_tel.jsx';
import View_address from './View_address/View_address.jsx';
import './View_Header.scss';


export default function View_Header() {
    return (
        <div className='view_header'>
            <View_Person_Image />
            <div className='name_mail_tel_address'>
                <View_name_surname />
                <View_Mail />
                <View_tel />
                <View_address />
            </div>
        </div>
    )
}