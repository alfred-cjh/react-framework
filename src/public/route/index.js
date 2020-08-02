import React from 'react'
import {BrowserRouter,Redirect,Route,HashRouter,Switch,Link} from 'react-router-dom';
import Resource from '../view/resource/resource' 
import Platform from '../view/platform/platform' 
 


let Home = ()=>{
  return (
    <div>Home</div>
  )
}
let Dashboards = ()=>{
  return (
    <div>Dashboard</div>
  )
}

class Dashboard extends React.Component{
  render(){
    return (
      <div>LoginxcxDashboardDashboardczcxz</div>
    )
  }
}

class Login extends React.Component{
  render(){
    return (
      <div>
        <Link to="/login/resource">resource</Link>
        <Link to="/login/pagemanage">pagemanage</Link>
        <Route path="/login/resource" component={Resource}/>
        <Route path="/login/pagemanage" component={Platform}/>
      </div>
    )
  }
}



let app = ()=>{
  return(
    <div>
      {/* <HashRouter>
        <Route path="/" component={Dashboard}>
          <Route path="/login"><Login/></Route>
          <Route path="/resource/resourceview" component={Resource}/>
          <Route path="/pagemanage/platform" component={Platform}/>
        </Route>
      </HashRouter> */}

      <HashRouter>
        <Switch>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/" exact component={Dashboards}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/resource/resourceview" component={Resource}/>
          <Route path="/pagemanage/platform" component={Platform}/>
        </Switch>
      </HashRouter>
    </div>
  )
}

export default app