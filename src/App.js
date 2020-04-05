import React from 'react'
import Home from './Home'
import Find from './Find'
import List from './List'
import Details from './Details'
import { Route,Link,Redirect,Switch } from 'react-router-dom'

function App() {
  return (
    <div >
        <Link to="/home">首页</Link> 
        <Link to="/find">发现</Link>
        <Link to="/list">列表</Link>
        <Switch>
        <Route path="/home" component={Home} />
        {/* exact 防止解析路由不准确 */}
        <Route path="/list" component={List} exact/>
        <Route path="/list/:id" component={Details} />

          <Route path="/find" component={Find} />
          <Redirect to="home" from="/" />
        </Switch>

        
    </div>
  );
}

export default App;
