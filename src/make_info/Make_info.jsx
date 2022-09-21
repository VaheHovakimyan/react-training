import { useDispatch, useSelector } from 'react-redux';
import './Make_info.scss';



export default function Make_info() {

    const dispatch = useDispatch();

    const name = useSelector((state) => {
        return state.name.name
    });

    const surname = useSelector((state) => {
        return state.surname.surname
    })

    return (
        <div className="make_info">
            <div className='header'>

                <div className='backgrounds'>

                    <div className='background_title_div'>
                        <p className='background_title'>Backgrounds</p>
                    </div>

                    <div className='backgrounds_items'>
                        <div className='backgrounds_item'
                            onClick={() => {
                                dispatch({
                                    type: "change_id",
                                    payload: {
                                        background_id: 1
                                    }
                                })
                            }}
                        >1</div>

                        <div className='backgrounds_item'
                            onClick={() => {
                                dispatch({
                                    type: "change_id",
                                    payload: {
                                        background_id: 2
                                    }
                                })
                            }}
                        >2</div>

                        <div className='backgrounds_item'
                            onClick={() => {
                                dispatch({
                                    type: "change_id",
                                    payload: {
                                        background_id: 3
                                    }
                                })
                            }}
                        >3</div>
                    </div>

                </div>

                <div>
                    <p>Name</p>
                    <input
                        type="text"
                        value={name}
                        onChange={(evt) => {
                            dispatch({
                                type: "change_name",
                                payload: {
                                    name: evt.target.value
                                }
                            })
                        }}
                    />
                </div>

                <div>
                    <p>Surname</p>
                    <input
                        type="text"
                        value={surname}
                        onChange={(evt) => {
                            dispatch({
                                type: "change_surname",
                                payload: {
                                    surname: evt.target.value
                                }
                            })
                        }}
                    />
                </div>

            </div>
        </div>
    )
}