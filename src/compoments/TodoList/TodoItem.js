import React, { Component } from 'react'

export default class TodoItem extends Component {

    changeState = (id)=>{
        this.props.changeState(id);
    }

    render() {
        return (
            <ul>
                {this.props.id} {this.props.title} 
                <input type='checkbox' checked={this.props.completed} onChange={
                    this.changeState.bind(this,this.props.id)
                } />
            </ul>
        )
    }
}
