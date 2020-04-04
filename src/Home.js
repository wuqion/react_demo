import React from 'react';
import './css/common.css';
import classNames from 'classnames';
const styles = {
    color:'#090'
}
function Home (){
    
    return(
        <div>
             <h1 style={{color:"red"}}>内连样式1</h1>
             <h1 style={styles}>内连样式2</h1>
             <h1 className='text-blueviolet'>class样式</h1>
             <h1 className={classNames('text-blueviolet', { textfont20: true, textfont10: false })}>classnames动态方式样式</h1>

            </div>
    )
}
export default Home;