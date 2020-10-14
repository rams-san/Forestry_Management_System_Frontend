import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import './css/Tables.css'
const axios = require('axios').default;
export default function GetAllProductsRecords() {
const [state, setState] = useState([]);
   
        axios.get('http://localhost:8080/getallproductsrecord').then((response) => {
          setState(response.data.productListInfo)
        });

  
    const [state1,setState1] = useState(true);
    if(!state1){
      return <Redirect to="/admin"/>
    }
    return (
        <div>
          <div id ="back" class="fixed-action-btn">
<p class="p"><button type="button" class="btn btn-secondary" onClick={() => setState1(false)}><i class="fas fa-arrow-circle-left"></i>&nbsp;back</button></p>
</div>
            <h1 className = "text-center">Products List</h1>
<table id="tablePreview" className = "table table-bordered">
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Quantity</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
   
    {
      
      state.map( 
  product =>
    <tr key = {product.productId}>
      <td>{product.productId}</td>
      <td>{product.productName}</td>
      <td>{product.productQuantity}</td>
      <td>{product.productDescription}</td>
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

