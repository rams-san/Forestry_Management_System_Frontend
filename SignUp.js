import React from 'react';
import './css/SignUp.css'
import History from './History'
const axios = require('axios').default;

export default class SignUp extends React.Component{

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

axios.post('http://localhost:8080/addcustomer',customer).then(response =>{
    this.setState({record: response.data})
    if(this.state.record.status===200){
      alert('Customer added successfully');
      setTimeout("location.reload(true)");
      History.push('/');  
   }
})
.catch(handleErrors)

function handleErrors(err){
  if(err.response){
    alert("Customer not added");
    setTimeout("location.reload(true)");
    History.push('/');
  }
 } 
}

  render(){
    return (
    <div>
      <div class="modal-body mx-3">
<form class="border3 border-light p-5"  onSubmit={this.handleSubmit}>
    <p class="h4 mb-4 text-left">Customer sign up</p>
    <input type="text"  class="form-control mb-4" onChange={this.handleChange1} name="customerName" pattern ="[A-Za-z ]{1,20}" title="only upto 20 alphabetic characters" placeholder="Name" required/>
 
    <input type="email"  class="form-control mb-4" onChange={this.handleChange2} name="customerEmail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="please enter valid email" placeholder="Email" required/>

    <input type="text"  class="form-control mb-4" onChange={this.handleChange3} name="customerId" pattern="([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])" title="enter id in a valid range between 1-9999" placeholder="Id" required/>
 
    <input type="password"  class="form-control mb-4" onChange={this.handleChange4} name="customerPassword" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title ="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder="Password" required/>
 
    <input type="text"  class="form-control mb-4" onChange={this.handleChange5} name="customerAddress" pattern="[a-zA-Z .]*" title="enter valid address" placeholder="Address" required/>

    <input type="text"  class="form-control mb-4" onChange={this.handleChange6}  name="customerContact" pattern="^\d{10}$" maxLength="10" title="enter a valid contact" placeholder="Contact" required/>

    <input type="text"  class="form-control mb-4" onChange={this.handleChange7}  name="customerPostalCode" pattern="^\d{6}$" maxLength="6" title="enter a valid postal code" placeholder="Postal Code" required/>

    <input type="text"  class="form-control mb-4" onChange={this.handleChange8} name="customerTown" pattern="[A-Za-z]{1,20}" title="enter valid town" placeholder="Town" required/>
      <div class="modal-footer d-flex justify-content-center">
        <button type ="submit" class="btn btn-info" id="link">Sign Up</button>
      </div>
</form>
      </div>
    </div>
    )
}
}
