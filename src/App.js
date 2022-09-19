<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
=======
import { useSelector,useDispatch } from 'react-redux';
import { SelectName, editName } from './features/currentUser/currentUserSlice.jsx';
import { SelectTodos, editText } from './features/todos/todosSlice.jsx';
>>>>>>> ac75bf2e94181046ff26c003167ea4b779b5867b


function App() {

<<<<<<< HEAD

  return (
    <div>
     
    </div>
  )
=======
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
>>>>>>> ac75bf2e94181046ff26c003167ea4b779b5867b
}

export default App;