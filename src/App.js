import { useDispatch, useSelector } from "react-redux";


function App() {

  const dispatch = useDispatch();

  const current_text = useSelector((state) => {
    return state.current_value.text
  });

  return (
    <div>
      <div>
        jksdfjsdfsdf
      </div>
      <h1>Text: {current_text}</h1>
      <input 
        type="text"
        value={current_text}
        onChange={(evt) => {
          dispatch({
            type: "add_text",
            payload:{
              text: evt.target.value
            }
          })
        }}
      />
    </div>
  )
}

export default App;






















// import { useSelector,useDispatch } from 'react-redux';


// function App() {

//   const name = useSelector((state) => {
//     return state.currentUser.name;
//   })

//   const text = useSelector((state) => {
//     return state.todos.text;
//   })

//   const dispatch = useDispatch();

//   return (
//     <div className='App'>
//       <h1>Name: {name}</h1>
//       <input
//         type="text"
//         value={name}
//         onChange={(evt) => {
//           dispatch({
//             type: "edit-current-user-name",
//             payload: {
              // name: evt.target.value
//             }
//           })
//         }}
//       />
//       <h1>Text: {text}</h1>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => {
//           dispatch({
//             type: "todo-add",
//             payload: {
//               text: e.target.value
//             }
//           })
//         }}
//       />
//     </div>
//   );
// }

// export default App;