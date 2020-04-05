import React, { Component } from 'react'
import TodoItem from './TodoItem'
export default class TodoList extends Component {
    render() {
        return (
            <div>
                {this.props.data.map((item)=>{
                    return <TodoItem key={item.id} {...item} changeState={this.props.changeState}/>
                })}
                
            </div>
        )
    }
}
