import { useSelector } from 'react-redux';
import './View_info.scss';



export default function View_info() {

    const background_id = useSelector((state) => {
        return state.header.background_id
    });

    const name = useSelector((state) => {
        return state.personal_info.name
    });

    const surname = useSelector((state) => {
        return state.personal_info.surname
    })

    
    return (
        <div className='view_info'>
            <div className='view_info_resume'>
                <p>{background_id}</p>
                <p>Name: {name}</p>
                <p>Surname: {surname}</p>
            </div>
        </div>
    )
}