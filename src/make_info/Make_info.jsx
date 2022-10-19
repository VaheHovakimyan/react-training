import { useDispatch, useSelector } from 'react-redux';
import './Make_info.scss';



export default function Make_info({setProfileImg}) {

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

    const color_background = useSelector((state) => {
        return state.color_background.color_background
    })



    const ImageHandler = (e) => {
        const selected = e.target.files[0];
        const Allowed_types = ["image/png", "image/jpeg", "image/jpg", "image/webp"];
        if(selected && Allowed_types.includes(selected.type)){
            let reader = new FileReader();
            reader.onloadend = () => {
                setProfileImg(reader.result);
            };
            reader.readAsDataURL(selected);
        }
    }



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

                    <div>
                        Background on color
                    </div>

                    <div>
                        <p>Color</p>
                        <input
                            type="color"
                            name="color"
                            id="background_color"
                            value={color_background}
                            onChange={(evt) => {
                                dispatch({
                                    type: "color_change_value",
                                    payload: {
                                        color_background: evt.target.value
                                    }
                                })
                            }}
                        />
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

                <input type="file" name="input" id="input" onChange={ImageHandler} />


            </div>
        </div>
    )
}