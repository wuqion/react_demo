import React, { Component } from 'react'
import {
  TodoHeader,
  TodoInput,
  TodoList
} from './compoments'


class App extends Component {
  constructor(){
    super()
    
  }
  render(){
    return (
      <div >
        <TodoInput></TodoInput> 
         <TodoList />
      </div>
    );
  }
  
}

export default App;
