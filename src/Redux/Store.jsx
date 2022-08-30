import { combineReducers,createStore } from "redux";

function currentUserReducer(state = {},action) {
    if (action.type === "edit-current-user-name") {
        return {
            ...state,
            name: action.payload.name
        };
    }
    return state;
}

function todosReducer(state = [],action) {
    if (action.type === "todo-add") {
        return {
            ...state,
            text: action.payload.text
        };
    }
    return state;
}

const store = createStore(combineReducers({
    currentUser: currentUserReducer,
    todos: todosReducer
}),{
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
            text: "Learn Js",
            isCompleted: false
        },
        {
            id: Math.random(),
            text: "Learn Js",
            isCompleted: false
        }
    ],
    currentUser: {
        name: "Mike Tayson"
    }
})

export default store;