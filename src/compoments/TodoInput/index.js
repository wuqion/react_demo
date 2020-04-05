import React, { Component,createRef } from 'react'


const inputRef = createRef();
export default class TodoInput extends Component {

    addItem = ()=>{
        this.props.addItem(inputRef.current.value);
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
