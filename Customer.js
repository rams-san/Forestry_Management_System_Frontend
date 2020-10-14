import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import AddContractCopy from './AddContractCopy';
import GetAllProductsCopy from './GetAllProductsCopy';
import GetAllSchedulersCopy from './GetAllSchedulersCopy';
import './css/Admin.css';
export default function Customer() {

  const [state,setState] = useState(true);
  if(!state){
    return <Redirect to="/"/>
  }
    return (
        <div>
            <Router>
            <div class="row">
           <ul>
           <div class="btn-group dropdown">
  <button type="button" id="btn" class="btn ">Services</button>
  <button type="button" id="btn" class="btn  dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
    aria-expanded="false">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
  <Link class="nav-link" id="id1" to="/addcontractcopy"> <button class="dropdown-item" type="submit">Add contract</button></Link>
  <Link class="nav-link" id="id1" to="/getallproductscopy"> <button class="dropdown-item" type="submit">Get all products</button></Link>
  <Link class="nav-link" id="id1" to="/getallschedulerscopy"> <button class="dropdown-item" type="submit">Get all schedulers</button></Link>

           </div>
           </div>
           </ul>
           <div class="div1">
             <p ><button type="button" class="btn btn-secondary" onClick={() => setState(false)}>Logout&nbsp;<i class="fas fa-sign-out-alt mdb-gallery-view-icon"></i></button></p>
           </div>
        </div>
        <Switch>
      <Route exact path="/addcontractcopy" component={AddContractCopy}></Route>
      <Route exact path="/getallproductscopy" component={GetAllProductsCopy}></Route>
      <Route exact path="/getallschedulerscopy" component={GetAllSchedulersCopy}></Route>

      </Switch>
        </Router>
        </div>
      
    )
}
