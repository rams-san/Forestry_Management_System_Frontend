import React from 'react'
import './css/Customer.css'
import History from './History'
const axios = require('axios').default;

export default class AddContractCopy extends React.Component{

    state = { 
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
        this.setState({contractNumber: event.target.value});
    };
    handleChange2 = event =>{
     this.setState({customerId: event.target.value});
   };
   handleChange3 = event =>{
     this.setState({productId: event.target.value});
   };
   handleChange4 = event =>{
    this.setState({schedulerId: event.target.value});
  };
  handleChange5 = event =>{
    this.setState({deliveryPlace: event.target.value});
  };
  handleChange6 = event =>{
    this.setState({deliveryDate: event.target.value});
  };
  handleChange7 = event =>{
    this.setState({quantity: event.target.value});
  };

handleSubmit = event =>{
   event.preventDefault();

const contract ={
    contractNumber: this.state.contractNumber,
    customerId:this.state.customerId,
    productId:this.state.productId,
    schedulerId:this.state.schedulerId,
    deliveryPlace:this.state.deliveryPlace,
    deliveryDate:this.state.deliveryDate,
    quantity:this.state.quantity,
}

axios.post('http://localhost:8080/addcontract',contract).then(response =>{
    this.setState({record: response.data})
    if(this.state.record!=null){
      alert('Contract added successfully');
      setTimeout("location.reload(true)");
      History.push('/customer');
   }
})
.catch(handleErrors)

function handleErrors(err){
  if(err.response){
    alert("Contract not added");
    setTimeout("location.reload(true)");
    History.push('/customer');
  }
 }
}
    
    render(){
    return (
    <div>
          <form class="border2 border-light p-5" onSubmit={this.handleSubmit}>
          <p class="h4 mb-4 text-left">Make contract</p>
          <input type="text" name="contactNumber"  onChange={this.handleChange1} class="form-control mb-4" pattern="([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])" title="enter valid contract number in a range between 1-9999" placeholder="Contract number" required/>
          <input type="text" name="customerId"   onChange={this.handleChange2} class="form-control mb-4" pattern="([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])" title="enter valid id in a range between 1-9999" placeholder="Customer Id" required/>
          <input type="text" name="productId"  onChange={this.handleChange3} class="form-control mb-4" pattern="([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])" title="enter valid id in a range between 1-9999" placeholder="Product Id" required/>
          <input type="text" name="schedulerId"  onChange={this.handleChange4} class="form-control mb-4" pattern="([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])" title="enter valid id in a range between 1-9999" placeholder="Scheduler Id" required/>
          <input type="text" name="deliveryPlace"  onChange={this.handleChange5} class="form-control mb-4" pattern="[A-Za-z]{1,20}" title="enter valid delivery place" placeholder="Delivery Place" required/>
          <input type="text" name="deliveryDate"  onChange={this.handleChange6} class="form-control mb-4" pattern="([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))" title="enter a valid date (e.g 2020-02-15)" placeholder="Delivery Date" required/>
          <input type="text" name="quantity"  onChange={this.handleChange7} class="form-control mb-4" pattern="([1-9]|[1-9][0-9]|100)" title="enter a valid quantity in range between(1-100)" placeholder="Quantity" required/>
          <div class="modal-footer d-flex justify-content-center">
          <button type ="submit" class="btn btn-info" >Add</button>
          </div>
          </form>
    </div>
   
    )
}
}

