import React from 'react'
import './css/Customer.css'
import History from './History'
const axios = require('axios').default;

export default class UpdateOrder extends React.Component {

    state = { 
        orderNumber: '',
        contractNumber: '',
        customerId:'',
        productId:'',
        schedulerId:'',
        deliveryPlace:'',
        deliveryDate:'',
        quantity:'',
        record:0
    };
    
    handleChange1 = event =>{
        this.setState({orderNumber: event.target.value});
     };
    handleChange2 = event =>{
        this.setState({contractNumber: event.target.value});
    };
    handleChange3 = event =>{
     this.setState({customerId: event.target.value});
   };
   handleChange4 = event =>{
     this.setState({productId: event.target.value});
   };
   handleChange5 = event =>{
    this.setState({schedulerId: event.target.value});
  };
  handleChange6 = event =>{
    this.setState({deliveryPlace: event.target.value});
  };
  handleChange7 = event =>{
    this.setState({deliveryDate: event.target.value});
  };
  handleChange8 = event =>{
    this.setState({quantity: event.target.value});
  };
 

handleSubmit = event =>{
   event.preventDefault();

const orders ={
    orderNumber: this.state.orderNumber,
    contractNumber: this.state.contractNumber,
    customerId:this.state.customerId,
    productId:this.state.productId,
    schedulerId:this.state.schedulerId,
    deliveryPlace:this.state.deliveryPlace,
    deliveryDate:this.state.deliveryDate,
    quantity:this.state.quantity,
}

axios.put('http://localhost:8080/updateorder',orders).then(response =>{
    this.setState({record: response.data})
    if(this.state.record!=null){
      alert('Order updated successfully');
      setTimeout("location.reload(true)");
      History.push('/admin');  
   }
})
.catch(handleErrors)

function handleErrors(err){
  if(err.response){
    alert("Order not updated");
    setTimeout("location.reload(true)");
    History.push('/admin');  
  }
 }
}

    render(){
    return (
        <div>
        <form class="border2 border-light p-5" onSubmit={this.handleSubmit}>
        <p class="h4 mb-4 text-left">Update order</p>
        <input type="text" name="orderNumber" onChange={this.handleChange1} class="form-control mb-4" pattern="([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])" title="enter valid order number in a range between 1-9999" placeholder="Order number" required/>
        <input type="text" name="contactNumber" onChange={this.handleChange2} class="form-control mb-4" pattern="([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])" title="enter valid contract number in a range between 1-9999" placeholder="Contract number" required/>
        <input type="text" name="customerId" onChange={this.handleChange3} class="form-control mb-4" pattern="([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])" title="enter valid id in a range between 1-9999" placeholder="Customer Id" required/>
        <input type="text" name="productId" onChange={this.handleChange4} class="form-control mb-4" pattern="([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])" title="enter valid id in a range between 1-9999" placeholder="Product Id" required/>
        <input type="text" name="schedulerId" onChange={this.handleChange5} class="form-control mb-4" pattern="([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])" title="enter valid id in a range between 1-9999" placeholder="Scheduler Id" required/>
        <input type="text" name="deliveryPlace" onChange={this.handleChange6} class="form-control mb-4" pattern="[A-Za-z]{1,20}" title="enter valid delivery place" placeholder="Delivery Place" required/>
        <input type="date" name="deliveryDate" onChange={this.handleChange7} class="form-control mb-4" pattern="^(\\d{4})-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$" title="enter a valid date" placeholder="Delivery Date" required/>
        <input type="text" name="quantity" onChange={this.handleChange8} class="form-control mb-4" pattern="([1-9]|[1-9][0-9]|100)" title="enter a valid quantity in range between(1-100)" placeholder="Quantity" required/>
        <div class="modal-footer d-flex justify-content-center">
        <button type="submit" class="btn btn-info" >Update</button>
        </div>
        </form>
  </div>
    )
}
}

