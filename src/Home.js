import React from 'react';
import {Link} from 'react-router-dom'

function Home (){
    return(
        <div>首页
            <Link to="list">跳转列表</Link>
        </div>
        
    )
}
export default Home;