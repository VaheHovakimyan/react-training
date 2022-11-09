import { useSelector } from 'react-redux';
import View_Header from './View_Header/ViewHeader';
import { selectBackgrounds } from '../Features/Main_settings/BackgroundsSlice';
import './ViewInfo.scss';
import ViewEducation from './View_education/ViewEducation';


export default function View_info({ profileImg, setProfileImg }) {

    const background_id = useSelector(selectBackgrounds);

    return (
        <div className='view_info_div'>
            <div className='view_info'>
                <div className={`view_info_resume_background${background_id}`}>
                    <div>
                        <View_Header
                            profileImg={profileImg}
                            setProfileImg={setProfileImg}
                        />
                        <ViewEducation />
                    </div>
                </div>
            </div>
        </div>
    )
}