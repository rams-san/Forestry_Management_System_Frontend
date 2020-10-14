import React from 'react';
import './css/SignUp.css'
import History from './History'
const axios = require('axios').default;
export default class UpdateCustomer extends React.Component {

  state = { 
    customerName: '',
    customerEmail:'',
    customerId:'',
    customerPassword:'',
    customerAddress:'',
    customerContact:'',
    customerPostalCode:'',
    customerTown:'',
    record:0
};

handleChange1 = event =>{
    this.setState({customerName: event.target.value});
};
handleChange2 = event =>{
 this.setState({customerEmail: event.target.value});
};
handleChange3 = event =>{
 this.setState({customerId: event.target.value});
};
handleChange4 = event =>{
this.setState({customerPassword: event.target.value});
};
handleChange5 = event =>{
this.setState({customerAddress: event.target.value});
};
handleChange6 = event =>{
this.setState({customerContact: event.target.value});
};
handleChange7 = event =>{
this.setState({customerPostalCode: event.target.value});
};
handleChange8 = event =>{
this.setState({customerTown: event.target.value});
};

handleSubmit = event =>{
event.preventDefault();

const customer ={
customerName: this.state.customerName,
customerEmail:this.state.customerEmail,
customerId:this.state.customerId,
customerPassword:this.state.customerPassword,
customerAddress:this.state.customerAddress,
customerContact:this.state.customerContact,
customerPostalCode:this.state.customerPostalCode,
customerTown:this.state.customerTown
}

axios.put('http://localhost:8080/updatecustomer',customer).then(response =>{
this.setState({record: response.data})
if(this.state.record!=null){
  alert('Customer added successfully');
  setTimeout("location.reload(true)");
  History.push('/admin');  
}
})
.catch(handleErrors)

function handleErrors(err){
  if(err.response){
    alert("Customer not updated");
    setTimeout("location.reload(true)");
    History.push('/admin'); 
  }
 }
}

  render(){
    return (
        <div>
        <form class="border2 border-light p-5" onSubmit={this.handleSubmit}>
        <p class="h4 mb-4 text-left">Update customer</p>
        <input type="text" name="customerName" onChange={this.handleChange1} class="form-control mb-4" pattern ="[A-Za-z ]{1,20}" title="only upto 20 alphabetic characters" placeholder="Customer Name" required/>
        <input type="text" name="customerId" onChange={this.handleChange2} class="form-control mb-4" pattern="([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])" title="enter valid id in a range between 1-9999" placeholder="Customer Id" required/>
        <input type="password" name="customerPassword" onChange={this.handleChange3} class="form-control mb-4" pattern ="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title ="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder="Customer Password" required/>
        <input type="email" name="customerEmail" onChange={this.handleChange4} class="form-control mb-4" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="please enter valid email" placeholder="Customer Email"/>
        <input type="text" name="customerAddress" onChange={this.handleChange5} class="form-control mb-4" pattern="[a-zA-Z .]*" title="enter valid address" placeholder="Customer Address" required/>
        <input type="text" name="customerContact" onChange={this.handleChange6} class="form-control mb-4" pattern="^\d{10}$" maxLength="10" title="enter a valid contact" placeholder="Customer Contact" required/>
        <input type="text" name="customerPostalCode" onChange={this.handleChange7} class="form-control mb-4" pattern="^\d{6}$" maxLength="6" title="enter a valid postal code" placeholder="Customer Postal Code" required/>
        <input type="text" name="customerTown" onChange={this.handleChange8} class="form-control mb-4" pattern="[A-Za-z]{1,20}" title="enter valid town" placeholder="Customer Town" required/>
        <div class="modal-footer d-flex justify-content-center">
        <button type="submit" class="btn btn-info" >Update</button>
        </div>
        </form>
      </div>
    )
}
}

