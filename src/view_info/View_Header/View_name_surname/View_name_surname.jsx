import { useSelector } from 'react-redux';


export default function View_name_surname() {

    const name = useSelector((state) => {
        return state.name.name
    });

    const surname = useSelector((state) => {
        return state.surname.surname
    });

    return (
        <>
            <p className='name_surname_text'> {name} {surname}</p>
        </>
    )
}