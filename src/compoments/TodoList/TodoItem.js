import React, { Component } from 'react'

export default class TodoItem extends Component {

    changeState = (id)=>{
        this.props.changeState(id);
    }
    shouldComponentUpdate(nextProps, nextState){        
        return nextProps.completed != this.props.completed
    }

    render() {
        console.log('TodoItem');
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
