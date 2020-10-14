import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import './css/Contract.css'
const axios = require('axios').default;
export default function GetAllContractsRecords() {

const [state, setState] = useState([]);
    useEffect(() => {

        axios.get('http://localhost:8080/getallcontractsrecord').then((response) => {
          setState(response.data.contractListInfo)
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
            <h1 className = "text-center">Contracts List</h1>
<table id="tablePreview" className = "table table-bordered">
  <thead>
    <tr>
      <th>Contract number</th>
      <th>Customer Id</th>
      <th>Product Id</th>
      <th>Scheduler Id</th>
      <th>Quantity</th>
      <th>Delivery date</th>
      <th>Delivery place</th>
    </tr>
  </thead>
  <tbody>
   
    {
      
      state.map( 
        contract =>
    <tr key = {contract.contractNumber}>
      <td>{contract.contractNumber}</td>
      <td>{contract.customerId}</td>
      <td>{contract.productId}</td>
      <td>{contract.schedulerId}</td>
      <td>{contract.quantity}</td>
      <td>{contract.deliveryPlace}</td>
      <td>{contract.deliveryDate}</td>
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

