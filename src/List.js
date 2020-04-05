import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class List extends Component {
    render() {
       
        return (
            
            <div>
                <li>
                <Link to="/list/1">详情1</Link>
                <div>
                    在props的match.params里面取id值
                </div>
                </li>
                <li>
                <Link to="/list/1?form=ooo">详情1</Link>
                <div>
                    在props的match.params里面取id值,
                    在props的location.search里面取id值"?form=ooo"需要手动解析
                </div>
                </li>
                <li>
                <Link to={{
                    pathname: '/list/1',
                    state:{
                        form:'ooo'
                    }
                }}>详情2</Link>
                <div>
                state不在地址栏显示，属于隐式传值
                    在props的match.params里面取id值,
                    在props的location.state里面取form值
                </div>
                </li>
                
            </div>
        )
    }
}
