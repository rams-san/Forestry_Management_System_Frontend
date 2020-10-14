import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import './css/Order.css'
const axios = require('axios').default;
export default function GetAllOrdersRecords() {

const [state, setState] = useState([]);
    useEffect(() => {

        axios.get('http://localhost:8080/getallordersrecord').then((response) => {
          setState(response.data.orderListInfo)
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
            <h1 className = "text-center">Orders List</h1>
<table id="order" className = "table table-bordered">
  <thead>
    <tr>
      <th>Order number</th>
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
        order =>
    <tr key = {order.orderNumber}>
      <td>{order.orderNumber}</td>
      <td>{order.contractNumber}</td>
      <td>{order.customerId}</td>
      <td>{order.productId}</td>
      <td>{order.schedulerId}</td>
      <td>{order.quantity}</td>
      <td>{order.deliveryPlace}</td>
      <td>{order.deliveryDate}</td>
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

