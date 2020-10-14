import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import './css/Table1.css'
const axios = require('axios').default;
export default function GetAllCustomersRecords() {

const [state, setState] = useState([]);
    useEffect(() => {

        axios.get('http://localhost:8080/getallcustomersrecord').then((response) => {
          setState(response.data.customerListInfo)
        });

    })
    const [state1,setState1] = useState(true);
    if(!state1){
      return <Redirect to="/admin"/>
    }
    return (
        <div>
          <div id ="back" class="fixed-action-btn">
<p class="p"><button type="button" class="btn btn-secondary" onClick={() => setState1(false)}><i class="fas fa-arrow-circle-left"></i>&nbsp;back</button></p>
</div>
            <h1 className = "text-center">Customers List</h1>
<table id="tablePreview" className = "table table-bordered">
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Email</th>
      <th>Contact</th>
      <th>Address</th>
      <th>Town</th>
      <th>Postal code</th>
    </tr>
  </thead>
  <tbody>
   
    {
      
      state.map( 
  customer =>
    <tr key = {customer.customerId}>
      <td>{customer.customerId}</td>
      <td>{customer.customerName}</td>
      <td>{customer.customerEmail}</td>
      <td>{customer.customerContact}</td>
      <td>{customer.customerAddress}</td>
      <td>{customer.customerTown}</td>
      <td>{customer.customerPostalCode}</td> 
    </tr>
  )
 
  }
 
  </tbody>
  {/* <!--Table body--> */}
</table>
{/* <!--Table--> */}
        </div>
       
    )
}

