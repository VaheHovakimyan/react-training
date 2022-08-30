import { useSelector,useDispatch } from 'react-redux';



function App() {

  const name = useSelector((state) => {
    return state.currentUser.name;
  })

  const text = useSelector((state) => {
    return state.todos.text;
  })

  const dispatch = useDispatch();

  return (
    <div className='App'>
      <h1>Name: {name}</h1>
      <input
        type="text"
        value={name}
        onChange={(evt) => {
          dispatch({
            type: "edit-current-user-name",
            payload: {
              name: evt.target.value
            }
          })
        }}
      />
      <h1>Text: {text}</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          dispatch({
            type: "todo-add",
            payload: {
              text: e.target.value
            }
          })
        }}
      />
    </div>
  );
}

export default App;