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

    const mail = useSelector((state) => {
        return state.mail.mail
    })

    const tel = useSelector((state) => {
        return state.tel.tel
    })

    const address = useSelector((state) => {
        return state.address.address
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

                <div>
                    <p>Mail</p>
                    <input
                        type="text"
                        value={mail}
                        onChange={(evt) => {
                            dispatch({
                                type: "change_mail",
                                payload: {
                                    mail: evt.target.value
                                }
                            })
                        }}
                    />
                </div>

                <div>
                    <p>Tel</p>
                    <input
                        type="text"
                        value={tel}
                        onChange={(evt) => {
                            dispatch({
                                type: "change_tel",
                                payload: {
                                    tel: evt.target.value
                                }
                            })
                        }}
                    />
                </div>

                <div>
                    <p>Address</p>
                    <input
                        type="text"
                        value={address}
                        onChange={(evt) => {
                            dispatch({
                                type: "change_add",
                                payload: {
                                    address: evt.target.value
                                }
                            })
                        }}
                    />
                </div>

            </div>
        </div>
    )
}