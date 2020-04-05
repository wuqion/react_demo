import React from 'react'
import {Link} from 'react-router-dom'

export default class Find extends React.Component{
    render(){
        return (
            <div>
                发现页
                <Link to="details">跳转详情</Link>
            </div>
            
        )
    }
}