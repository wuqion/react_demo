import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { changeItem } from '../../actions'


class TodoItem extends PureComponent {

    changeState = (id)=>{
        console.log(this.props)
        this.props.dispatch(changeItem(id))
    }
    // shouldComponentUpdate(nextProps, nextState){        
    //     return nextProps.completed != this.props.completed
    // }

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
export default connect()(TodoItem);