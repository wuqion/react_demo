import React, { Component } from 'react'
import {
  TodoHeader,
  TodoInput,
  TodoList
} from './compoments'


class App extends Component {
  constructor(){
    super()
    this.state = {
      data :[{
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
    }
  }
  addItem = (title)=>{
    let tmp = this.state.data;
    tmp.push({
      "userId": 1,
      "id": this.state.data.length + 1,
      "title": title,
      "completed": false
    });
    this.setState({
      data:tmp
    })
  }
  render(){
    return (
      <div >
        <TodoInput  addItem={this.addItem}></TodoInput> 
         <TodoList data={ this.state.data}/>
      </div>
    );
  }
  
}

export default App;
