import { createStore } from "redux";


const store = createStore((state = {}, action) => {

    if (action.type === "change_id") {
        return {
            ...state,
            background: {
                background_id: action.payload.background_id
            }
        }
    } else if (action.type === "color_change_value") {
        return {
            ...state,
            color_background: {
                color_background: action.payload.color_background
            }
        }
    } else if (action.type === "change_name") {
        return {
            ...state,
            name: {
                name: action.payload.name
            }
        }
    } else if (action.type === "change_surname") {
        return {
            ...state,
            surname: {
                surname: action.payload.surname
            }
        }
    } else if (action.type === "change_mail") {
        return {
            ...state,
            mail: {
                mail: action.payload.mail
            }
        }
    } else if (action.type === "change_tel") {
        return {
            ...state,
            tel: {
                tel: action.payload.tel
            }
        }
    } else if (action.type === "change_add") {
        return {
            ...state,
            address: {
                address: action.payload.address
            }
        }
    } else if (action.type === "change_img") {
        return {
            ...state,
            main_image: {
                main_image: action.payload.main_image
            }
        }
    }

    return state
}, {
    background: {
        background_id: 1
    },
    name: {
        name: "Vahe"
    },
    surname: {
        surname: "Hovakimyan"
    },
    mail: {
        mail: "vahe.hovakimyan.19@mail.ru"
    },
    tel: {
        tel: "(+374)69-94-89-32, (+374)79-94-89-32"
    },
    address: {
        address: "Town Ejmiatsin, region Armavir, Armenia"
    },
    main_image: {
        main_image: '../../../Resume_backgrounds/image_3.png'
    },
    color_background: {
        color_background: ""
    }
})


export default store;