import { useSelector } from 'react-redux';


export default function View_Surname(){

    const surname = useSelector((state) => {
        return state.surname.surname
    });

    return(
        <>
              <p>Surname: {surname}</p>
        </>
    )
}