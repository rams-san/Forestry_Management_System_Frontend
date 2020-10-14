import React from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import './App.css';
import './css/Font.css'
import Home from './Home';
import Admin from './Admin'
import Login from './Login';
import Contact from './Contact';
import SignUp from './SignUp'
import LoginForm from './LoginForm'
import Customer from './Customer'
import AdminLogin from './AdminLogin'
import CustomerLogin from './CustomerLogin'
import GetAllAdminsRecords from './GetAllAdminsRecords'
import GetAllLandsRecords from './GetAllLandsRecords'
import GetAllCustomersRecords from './GetAllCustomersRecords'
import GetAllProductsRecords from './GetAllProductsRecords'
import GetAllSchedulersRecords from './GetAllSchedulersRecords'
import GetAllOrdersRecords from './GetAllOrdersRecords'
import GetAllContractsRecords from './GetAllContractsRecords'
import GetAllProductsRecordsCopy from './GetAllProductsRecordsCopy';
import GetAllSchedulersRecordsCopy from './GetAllSchedulersRecordsCopy';
function App() {

  return (
    
    <Router>
    <div className="App">

    <nav className="navbar navbar-default navbar-expand-lg navbar-light bg-dark " id="nav">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ">

          <ul className="nav navbar-nav">
          <li className="nav-item active">
          <a className="navbar-brand"  id="id12"><i class="fas fa-leaf"></i>&nbsp;MyForestry</a>    
          </li>
            <li className="nav-item active">
            <NavLink className="nav-link " activeStyle={{ color: "steelblue" }}id="link" to="/">Home</NavLink>      
            </li>

            <li className="nav-item active">
            <NavLink className="nav-link active" activeStyle={{color:"steelblue"}} id="link" to="/loginform">Login</NavLink>
            </li>

            <li className="nav-item active">
              <NavLink className="nav-link" to="/contact" activeStyle={{ color:"steelblue" }} id="link">Contact</NavLink>
            </li>
          </ul>
        </div>
        <NavLink className="nav-link" id="link" to="/signup" activeStyle={{ color:"steelblue" }}>Sign Up</NavLink>
      </nav>
<br></br>

      <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/signup" component={SignUp}></Route>
      <Route exact path="/admin" component={Admin}></Route>
      <Route exact path="/customer" component={Customer}></Route>
      <Route exact path="/loginform" component={LoginForm}></Route>
      <Route exact path="/adminlogin" component={AdminLogin}></Route>
      <Route exact path="/customerlogin" component={CustomerLogin}></Route>
      <Route exact path="/getalladminrecords" component={GetAllAdminsRecords}></Route>
      <Route exact path="/getalllandsrecords" component={GetAllLandsRecords}></Route>
      <Route exact path="/getallcustomersrecords" component={GetAllCustomersRecords}></Route>
      <Route exact path="/getallproductsrecords" component={GetAllProductsRecords}></Route>
      <Route exact path="/getallproductsrecordscopy" component={GetAllProductsRecordsCopy}></Route>
      <Route exact path="/getallschedulersrecords" component={GetAllSchedulersRecords}></Route>
      <Route exact path="/getallschedulersrecordscopy" component={GetAllSchedulersRecordsCopy}></Route>
      <Route exact path="/getallordersrecords" component={GetAllOrdersRecords}></Route>
      <Route exact path="/getallcontractsrecords" component={GetAllContractsRecords}></Route>
      
      </Switch>
    </div>
    </Router>
  );
}

export default App;
