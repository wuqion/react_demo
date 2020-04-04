import React from 'react'
import PropTypes from 'prop-types'; 

export default function TodoHeader(props) {
    console.log(props);
    return (
        
        <div>
            <li>{props.title}</li>
            <li>{props.children}</li>
            <li>传值的并计算：z+y={props.z+props.y}</li>
            <li>传值的并计算（加入prop-types判断，已经在控制台报错）：x+y={props.x+props.y}</li>
    <li>{props.des}</li>
        </div>
    )
}
TodoHeader.propTypes = {
    x:PropTypes.number,
    y:PropTypes.number.isRequired
}
TodoHeader.defaultProps ={
    des:"设置默认值"
}