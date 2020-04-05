import React from 'react'
import {
  TodoHeader,
  TodoInput,
  TodoList
} from './compoments'

const data = [{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
{
  "userId": 1,
  "id": 2,
  "title": "quis ut nam facilis et officia qui",
  "completed": false
}]

function App() {
  return (
    <div >
      <TodoInput ></TodoInput> 
       <TodoList data={data}/>
    </div>
  );
}

export default App;
