import { createStore } from "redux";


const store = createStore((state = {}, action) => {

    if(action.type === "change_id"){
        return{
            ...state,
            header:{
                background_id: action.payload.background_id
            }
        }
    }else if(action.type === "change_name"){
        return{
            ...state,
            personal_info:{
                name: action.payload.name,
                surname: action.payload.surname
            }
        }
    }

    return state
}, {
    header:{
        background_id: 1
    },
    personal_info:{
        name: "",
        surname: "",
        e_mail: "",
        tel_number: "",
        address: ""
    }
})


export default store;