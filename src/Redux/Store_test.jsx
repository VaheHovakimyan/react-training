import { createStore } from "redux";

const store = createStore((state, action) => {

    if(action.type === "add_text"){
        return{
            ...state,
            current_value:{
                text: action.payload.text
            }
        }

    }

    return state

},{
    current_value:{
        text: "Hello"
    }
})

export default store;