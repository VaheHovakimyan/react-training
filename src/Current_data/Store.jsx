import { combineReducers, createStore } from "redux";
import { currentUserReducer, initialCurrentUser } from "../../features/currentUser/currentUserSlice";
import { todosReducer, initialTodos } from "../../features/todos/todosSlice";


const store = createStore(combineReducers({
    currentUser: currentUserReducer,
    todos: todosReducer
}), {
    posts: [],
    friends: [],
    todos: initialTodos,
    currentUser: initialCurrentUser
})

export default store;