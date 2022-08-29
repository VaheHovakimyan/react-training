import { createStore } from "redux";

const store = createStore(function (state,action) {
    if (action.type === "edit-current-user-name") {
        return {
            ...state,
            currentUser: {
                name: action.payload.name
            }
        };
    }
    return state;
},{
    posts: [],
    friends: [],
    todos: [
        {
            id: Math.random(),
            text: "Learn Js",
            isCompleted: false
        },
        {
            id: Math.random(),
            text: "Learn React js",
            isCompleted: false
        },
        {
            id: Math.random(),
            text: "Learn Node js",
            isCompleted: false
        }
    ],
    currentUser: {
        name: "Mike Tayson"
    }
})

export default store;