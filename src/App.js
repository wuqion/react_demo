import React from 'react'
import Home from './Home'
import Find from './Find'
import Details from './Details'
import { Route,Link,Redirect,Switch } from 'react-router-dom'

function App() {
  return (
    <div >
        <Link to="/home">首页</Link> 
        <Link to="/find">发现</Link>
        <Switch>
        <Route path="/home" component={Home} />
        <Route path="/details" component={Details} />
          <Route path="/find" component={Find} />
          <Redirect to="home" from="/" />
        </Switch>

        
    </div>
  );
}

export default App;
