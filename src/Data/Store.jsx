import { createStore } from "redux";


const store = createStore((state = {}, action) => {

    if (action.type === "change_id") {
        return {
            ...state,
            background: {
                background_id: action.payload.background_id
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
        tel: "069-94-89-32"
    },
    address: {
        address: "Town Ejmiatsin, region Armavir, Armenia"
    }
})


export default store;