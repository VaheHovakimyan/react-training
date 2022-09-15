export function todosReducer(state = {}, action) {
    if (action.type === "todo_add") {
        return {
            ...state,
            text: action.payload.text
        };
    }

    return state;
}


export const initialTodos = {
    text: "Learn Js"
}


export function SelectTodos(state) {
    return state.todos.text;
}


export function editText(newText) {
    return {
        type: "todo_add",
        payload: {
            name: newText
        }
    }
}