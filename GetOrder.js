import React from 'react'
import './css/Customer.css'
import History from './History'
const axios = require('axios').default;
export default class GetOrder extends React.Component {

    state = { 
        orderNumber:'',
        record:0,
        redirect:true
    };
    
     
    setRedirect = () =>{
      History.push('/admin');
      setTimeout("location.reload(true)");  
    };
    
    
    handleChange1 = event =>{
        this.setState({orderNumber: event.target.value});
    };
    
    handleSubmit = event =>{
    
    event.preventDefault();
    
    var orders ={
        orderNumber: this.state.orderNumber
    }
    axios.get('http://localhost:8080/getorder',{params:orders}).then(response =>{
          this.setState({record: response.data})
          console.log(response.data)    
          if(this.state.record.status===200){
            alert('record found');
          }
         
    })
    
    .catch(handleErrors)
    
    function handleErrors(err){
      if(err.response){
        alert("record not found");
      }
    }   
    }

    render(){
        if(this.state.record.status===200){
            return (
                <div>
                    <div id ="back" class="fixed-action-btn">
        <p class="p"><button type="button" class="btn btn-secondary" onClick={this.setRedirect}><i class="fas fa-arrow-circle-left"></i>&nbsp;back</button></p>
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
              
           
            <tr key = {this.state.record.order.orderNumber}>
              <td>{this.state.record.order.orderNumber}</td>
              <td>{this.state.record.order.contractNumber}</td>
              <td>{this.state.record.order.customerId}</td>
              <td>{this.state.record.order.productId}</td>
              <td>{this.state.record.order.schedulerId}</td>
              <td>{this.state.record.order.quantity}</td>
              <td>{this.state.record.order.deliveryPlace}</td>
              <td>{this.state.record.order.deliveryDate}</td>
            </tr>
          
         
          }
         
          </tbody>
          {/* <!--Table body--> */}
        </table>
        {/* <!--Table--> */}
                </div>
               
            )
        }
    return (
        <div>
             <form class="border2 border-light p-5" onSubmit={this.handleSubmit}>
               <p class="h4 mb-4 text-left">Search order</p>
                 <input type="text" id="orderNumber"  onChange={this.handleChange1} class="form-control mb-4" pattern="([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])" title="enter valid order number in a range between 1-9999" placeholder="Order Number" required/>
                 <div class="modal-footer d-flex justify-content-center">
                 <button type="submit" class="btn btn-info" >Get</button>
                 </div>
             </form>
        </div>
    )
}
}

