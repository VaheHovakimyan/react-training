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
    }

    return state
}, {
    background: {
        background_id: 1
    },
    name: { 
        name: "cf"
    },
    surname: {
        surname: "dfvv"
    }
})


export default store;