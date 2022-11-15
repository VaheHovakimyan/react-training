import { useState } from 'react';
import Make_info from '../MakeInfo/MakeInfo';
import View_info from '../ViewInfo/ViewInfo';
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