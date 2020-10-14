import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import './css/Admin.css'
import AddContract from './AddContract';
import UpdateContract from './UpdateContract';
import DeleteContract from './DeleteContract';
import GetContract from './GetContract';
import GetAllContracts from './GetAllContracts';
import AddOrder from './AddOrder';
import UpdateOrder from './UpdateOrder';
import DeleteOrder from './DeleteOrder';
import GetOrder from './GetOrder';
import GetAllOrders from './GetAllOrders';
import AddScheduler from './AddScheduler';
import UpdateScheduler from './UpdateScheduler';
import DeleteScheduler from './DeleteScheduler';
import GetScheduler from './GetScheduler';
import GetAllSchedulers from './GetAllSchedulers';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import DeleteProduct from './DeleteProduct';
import GetProduct from './GetProduct';
import GetAllProducts from './GetAllProducts';
import AddLand from './AddLand';
import UpdateLand from './UpdateLand';
import DeleteLand from './DeleteLand';
import GetLand from './GetLand';
import GetAllLands from './GetAllLands';
import AddAdmin from './AddAdmin';
import UpdateAdmin from './UpdateAdmin';
import DeleteAdmin from './DeleteAdmin';
import GetAdmin from './GetAdmin';
import GetAllAdmins from './GetAllAdmins';
import UpdateCustomer from './UpdateCustomer';
import DeleteCustomer from './DeleteCustomer';
import GetCustomer from './GetCustomer';
import GetAllCustomers from './GetAllCustomers';

export default function Admin (){

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
  <button type="button" id="btn" class="btn">Admin</button>
  <button type="button" id="btn" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
    aria-expanded="false">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
  <Link class="nav-link" id="id1" to="/addadmin"> <button class="dropdown-item" type="submit">Add admin</button></Link>
  <Link class="nav-link" id="id1" to="/updateadmin"> <button class="dropdown-item" type="submit">Update admin</button></Link>
  <Link class="nav-link" id="id1" to="/deleteadmin"> <button class="dropdown-item" type="submit">Delete admin</button></Link>
  <Link class="nav-link" id="id1" to="/getadmin"> <button class="dropdown-item" type="submit">Search admin</button></Link>
  <Link class="nav-link" id="id1" to="/getalladmins"> <button class="dropdown-item" type="submit">List of admins</button></Link>
  </div>
</div>
&nbsp;&nbsp;&nbsp;&nbsp;
<div class="btn-group dropdown">
  <button type="button" id="btn" class="btn">Customer</button>
  <button type="button" id="btn" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
    aria-expanded="false">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
  <Link class="nav-link" id="id1" to="/updatecustomer"> <button class="dropdown-item" type="submit">Update customer</button></Link>
  <Link class="nav-link" id="id1" to="/deletecustomer"> <button class="dropdown-item" type="submit">Delete customer</button></Link>
  <Link class="nav-link" id="id1" to="/getcustomer"> <button class="dropdown-item" type="submit">Search customer</button></Link>
  <Link class="nav-link" id="id1" to="/getallcustomers"> <button class="dropdown-item" type="submit">List of customers</button></Link>
  </div>
</div>
&nbsp;&nbsp;&nbsp;&nbsp;
<div class="btn-group dropdown">
  <button type="button" id="btn" class="btn">Land</button>
  <button type="button" id="btn" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
    aria-expanded="false">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
  <Link class="nav-link" id="id1" to="/addland"> <button class="dropdown-item" type="submit">Add land</button></Link>
  <Link class="nav-link" id="id1" to="/updateland"> <button class="dropdown-item" type="submit">Update land</button></Link>
  <Link class="nav-link" id="id1" to="/deleteland"> <button class="dropdown-item" type="submit">Delete land</button></Link>
  <Link class="nav-link" id="id1" to="/getland"> <button class="dropdown-item" type="submit">Search land</button></Link>
  <Link class="nav-link" id="id1" to="/getalllands"> <button class="dropdown-item" type="submit">List of lands</button></Link>
  </div>
</div>
&nbsp;&nbsp;&nbsp;&nbsp;
<div class="btn-group dropdown">
  <button type="button" id="btn" class="btn">Product</button>
  <button type="button" id="btn" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
    aria-expanded="false">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
  <Link class="nav-link" id="id1" to="/addproduct"> <button class="dropdown-item" type="submit">Add product</button></Link>
  <Link class="nav-link" id="id1" to="/updateproduct"> <button class="dropdown-item" type="submit">Update product</button></Link>
  <Link class="nav-link" id="id1" to="/deleteproduct"> <button class="dropdown-item" type="submit">Delete product</button></Link>
  <Link class="nav-link" id="id1" to="/getproduct"> <button class="dropdown-item" type="submit">Search product</button></Link>
  <Link class="nav-link" id="id1" to="/getallproducts"> <button class="dropdown-item" type="submit">List of products</button></Link>
  </div>
</div>
&nbsp;&nbsp;&nbsp;&nbsp;
<div class="btn-group dropdown">
  <button type="button" id="btn" class="btn">Scheduler</button>
  <button type="button" id="btn" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
    aria-expanded="false">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
  <Link class="nav-link" id="id1" to="/addscheduler"> <button class="dropdown-item" type="submit">Add scheduler</button></Link>
  <Link class="nav-link" id="id1" to="/updatescheduler"> <button class="dropdown-item" type="submit">Update scheduler</button></Link>
  <Link class="nav-link" id="id1" to="/deletescheduler"> <button class="dropdown-item" type="submit">Delete scheduler</button></Link>
  <Link class="nav-link" id="id1" to="/getscheduler"> <button class="dropdown-item" type="submit">Search scheduler</button></Link>
  <Link class="nav-link" id="id1" to="/getallschedulers"> <button class="dropdown-item" type="submit">List of schedulers</button></Link>
  </div>
</div>
&nbsp;&nbsp;&nbsp;&nbsp;
<div class="btn-group dropdown">
  <button type="button" id="btn" class="btn">Orders</button>
  <button type="button" id="btn" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
    aria-expanded="false">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
  <Link class="nav-link" id="id1" to="/addorder"> <button class="dropdown-item" type="submit">Make order</button></Link>
  <Link class="nav-link" id="id1" to="/updateorder"> <button class="dropdown-item" type="submit">Update order</button></Link>
  <Link class="nav-link" id="id1" to="/deleteorder"> <button class="dropdown-item" type="submit">Delete order</button></Link>
  <Link class="nav-link" id="id1" to="/getorder"> <button class="dropdown-item" type="submit">Search order</button></Link>
  <Link class="nav-link" id="id1" to="/getallorders"> <button class="dropdown-item" type="submit">List of orders</button></Link>
  </div>
</div>
&nbsp;&nbsp;&nbsp;&nbsp;
<div class="btn-group dropdown">
  <button type="button" id="btn" class="btn">Contract</button>
  <button type="button" id="btn" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
    aria-expanded="false">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
  <Link class="nav-link" id="id1" to="/addcontract"> <button class="dropdown-item" type="submit">Make contract</button></Link>
  <Link class="nav-link" id="id1" to="/updatecontract"> <button class="dropdown-item" type="submit">Update contract</button></Link>
  <Link class="nav-link" id="id1" to="/deletecontract"> <button class="dropdown-item" type="submit">Delete Contract</button></Link>
  <Link class="nav-link" id="id1" to="/getcontract"> <button class="dropdown-item" type="submit">Search contract</button></Link>
  <Link class="nav-link" id="id1" to="/getallcontracts"> <button class="dropdown-item" type="submit">List of contracts</button></Link>
  </div>
</div>

</ul>
<div class="fixed-action-btn">
<p class="p"><button type="button" class="btn btn-secondary" onClick={() => setState(false)}>Logout&nbsp;<i class="fas fa-sign-out-alt mdb-gallery-view-icon"></i></button></p>
</div>
</div>



      <Switch>
      <Route exact path="/addcontract" component={AddContract}></Route>
      <Route exact path="/updatecontract" component={UpdateContract}></Route>
      <Route exact path="/getcontract" component={GetContract}></Route>
      <Route exact path="/deletecontract" component={DeleteContract}></Route>
      <Route exact path="/getallcontracts" component={GetAllContracts}></Route>

      <Route exact path="/addorder" component={AddOrder}></Route>
      <Route exact path="/updateorder" component={UpdateOrder}></Route>
      <Route exact path="/getorder" component={GetOrder}></Route>
      <Route exact path="/deleteorder" component={DeleteOrder}></Route>
      <Route exact path="/getallorders" component={GetAllOrders}></Route>

      <Route exact path="/addscheduler" component={AddScheduler}></Route>
      <Route exact path="/updatescheduler" component={UpdateScheduler}></Route>
      <Route exact path="/getscheduler" component={GetScheduler}></Route>
      <Route exact path="/deletescheduler" component={DeleteScheduler}></Route>
      <Route exact path="/getallschedulers" component={GetAllSchedulers}></Route>

      <Route exact path="/addproduct" component={AddProduct}></Route>
      <Route exact path="/updateproduct" component={UpdateProduct}></Route>
      <Route exact path="/getproduct" component={GetProduct}></Route>
      <Route exact path="/deleteproduct" component={DeleteProduct}></Route>
      <Route exact path="/getallproducts" component={GetAllProducts}></Route>

      <Route exact path="/addadmin" component={AddAdmin}></Route>
      <Route exact path="/updateadmin" component={UpdateAdmin}></Route>
      <Route exact path="/getadmin" component={GetAdmin}></Route>
      <Route exact path="/deleteadmin" component={DeleteAdmin}></Route>
      <Route exact path="/getalladmins" component={GetAllAdmins}></Route>

      <Route exact path="/addland" component={AddLand}></Route>
      <Route exact path="/updateland" component={UpdateLand}></Route>
      <Route exact path="/getland" component={GetLand}></Route>
      <Route exact path="/deleteland" component={DeleteLand}></Route>
      <Route exact path="/getalllands" component={GetAllLands}></Route>

      <Route exact path="/updatecustomer" component={UpdateCustomer}></Route>
      <Route exact path="/getcustomer" component={GetCustomer}></Route>
      <Route exact path="/deletecustomer" component={DeleteCustomer}></Route>
      <Route exact path="/getallcustomers" component={GetAllCustomers}></Route>

      </Switch>
        </Router>
</div>

    )
}
