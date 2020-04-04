import React, { Component } from 'react'
import PropTypes from 'prop-types'; 


export default class TodoInput extends Component {
    static propTypes ={
        x:PropTypes.number.isRequired
    }
    static defaultProps = {
        des:"设置默认值"
    }
    render() {
        return (
            <div>
                <li>{this.props.title}</li>
                <li>{this.props.children}</li>
                <li>传值的并计算：z+y={this.props.z+this.props.y}</li>
                <li>传值的并计算（加入prop-types判断，已经在控制台报错）：x+y={this.props.x+this.props.y}</li>
                <li>{this.props.des}</li>
                <input type="text" />
                <button>提交</button>
            </div>
        )
    }
}
