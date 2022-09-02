export function todosReducer(state = [], action) {
    if (action.type === "todo-add") {
        return {
            ...state,
            text: action.payload.text
        }
    }
    return state;
}


export const initialTodos = [
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
];


export function SelectTodos(state) {
    return state.todos.text;
}


export function editText(newText) {
    return {
        type: "todo-add",
        payload: {
            name: newText
        }
    }
}