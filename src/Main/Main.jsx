import { useState } from 'react';
import Make_info from '../Make_info/Make_info.jsx';
import View_info from '../View_info/View_Info.jsx';
import './Main.scss';


export default function Main() {

    const [profileImg, setProfileImg] = useState();

    return (
        <div className='main'>
            <Make_info 
                setProfileImg={setProfileImg}
            />
            <View_info 
                profileImg={profileImg}
            />
        </div>
    )
}