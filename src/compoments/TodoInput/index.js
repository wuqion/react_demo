import React, { Component,createRef } from 'react'
import { connect } from 'react-redux'
import { jiaFun } from '../../actions'


const inputRef = createRef();
class TodoInput extends Component {

    addItem = ()=>{
        this.props.dispatch(jiaFun(inputRef.current.value));
    }
    render() {
        return (
            <div>
                <input type="text" ref={inputRef}/>
                <button onClick={this.addItem} >添加</button>
            </div>
        )
    }
}
export default connect()(TodoInput);
