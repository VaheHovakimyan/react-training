import { useSelector } from 'react-redux';
import View_Header from './View_Header/View_Header';
import './View_info.scss';


export default function View_info() {

    const background_id = useSelector((state) => {
        return state.background.background_id
    });

    return (
        <div className='view_info'>
            <div className={`view_info_resume_background${background_id}`}>
                <View_Header />
            </div>
        </div>
    )
}