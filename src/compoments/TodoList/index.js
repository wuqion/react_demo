import React, { Component } from 'react'
import TodoItem from './TodoItem'
export default class TodoList extends Component {
    render() {
        console.log(this.props.data);
        return (
            <div>
                {this.props.data.map((item)=>{
                    return <TodoItem key={item.id} {...item}/>
                })}
                
            </div>
        )
    }
}
