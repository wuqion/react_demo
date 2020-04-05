import React, { Component } from 'react'
import TodoItem from './TodoItem'
import { connect } from 'react-redux'

class TodoList extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.data.map((item)=>{
                    return <TodoItem key={item.id} {...item}/>
                })}
                
            </div>
        )
    }
}
const mapStateToProps= (state)=>{
    console.log(state);
    return {
        data:state.todo
    }
}
export default connect(mapStateToProps)(TodoList)