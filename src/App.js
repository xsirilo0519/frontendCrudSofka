import React, { useContext } from 'react'

const HOST_API="http://localhost:4000/api"

const List=()=>{
  const {dispatch,state}=useContext(Store);
  return <div>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Nombre</td>
            <td>¿Esta completado?</td>
          </tr>
        </thead>
        <tbody>
          {
            state.List.map((todo)=>{
              return <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.name}</td>
                <td>{todo.isCompleted}</td>
              </tr>
            })
          }
        </tbody>
      </table>
      </div>
}
function App() {
  return (
    <div>
      
    </div>
  );
}

export default App;
