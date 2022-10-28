import { useDispatch, useSelector } from "react-redux";



export default function Header({ ImageHandler }) {

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

    const main_image = useSelector((state) => {
        return state.main_image.main_image
    })


    return (

        <div className='main_settings_open'>

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

            <input type="file" name="input" id="input" onChange={ImageHandler} />
        </div>

    )
}