import { useSelector } from 'react-redux';
import View_Header from './View_Header/ViewHeader';
import { selectBackgrounds } from '../Features/Main_settings/BackgroundsSlice';
import ViewEducation from './View_education/ViewEducation';
import './ViewInfo.scss';
// import hjfd from '../Resume_backgrounds/'

export default function View_info({ profileImg, setProfileImg }) {

    const background_id = useSelector(selectBackgrounds);

    // const image =  

    return (
        <div className='view_info_div'>
            <div className='view_info'>
                <div className='view_info_resume_background_div' style={{background: `url("../Resume_backgrounds/image_${background_id}.png")`}}>
                    {/* <div className={`view_info_resume_background${background_id}`}> */}
                        <div>
                            <View_Header
                                profileImg={profileImg}
                                setProfileImg={setProfileImg}
                            />
                            <ViewEducation />
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}