import { useSelector } from 'react-redux';


export default function View_name(){

    const name = useSelector((state) => {
        return state.name.name
    });

    return(
        <>
              <p>Name: {name}</p>
        </>
    )
}