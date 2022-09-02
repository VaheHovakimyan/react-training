import { useSelector,useDispatch } from 'react-redux';
import { SelectName, editName } from './features/currentUser/currentUserSlice.jsx';
import { SelectTodos, editText } from './features/todos/todosSlice.jsx';


function App() {

  const name = useSelector(SelectName);
  const text = useSelector(SelectTodos);

  const dispatch = useDispatch();

  return (
    <div className='App'>
      <h1>Name: {name}</h1>
      <input
        type="text"
        value={name}
        onChange={(evt) => {
          dispatch(editName(evt.target.value))
        }}
      />
      <h1>Text: {text}</h1>
      <input
        type="text"
        value={text}
        onChange={(evt) => {
          dispatch(editText(evt.target.value))
        }}
      />
    </div>
  );
}

export default App;