import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        return (
            <ul>
                {this.props.id} {this.props.title} 
                <input type='checkbox' checked={this.props.completed} />
            </ul>
        )
    }
}
