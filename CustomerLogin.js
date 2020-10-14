import React from 'react'
import History from './History'
const axios = require('axios').default;
export default class  CustomerLogin extends React.Component{

  state = { 
    customerName:'',
    customerPassword:'',
    record:0,
    redirect:true
};

 
setRedirect = () =>{
  History.push('/customer');
  setTimeout("location.reload(true)");  
};


handleChange1 = event =>{
    this.setState({customerName: event.target.value});
};

handleChange2 = event =>{
  this.setState({customerPassword: event.target.value});
};

handleSubmit = event =>{

event.preventDefault();

var customer ={
  customerName: this.state.customerName,
  customerPassword: this.state.customerPassword
}
axios.get('http://localhost:8080/logincustomer',{params:customer}).then(response =>{
      this.setState({record: response.data})
      console.log(response.data)    
      if(this.state.record.status===200)
      {
        alert('login successful');
        setTimeout("location.reload(true)");
        History.push('/customer');
      
    }
})

.catch(handleErrors)

function handleErrors(err){
  if(err.response){
    alert("login failed");
  }
}   
}

  render(){
  
    return (
        <div>
            <div class="modal-body mx-3">
      <form class="border1 border-light p-5" onSubmit={this.handleSubmit} method="get">
             <p class="h4 mb-4 text-left">Login</p>
             <input type="text" name="customerName" onChange={this.handleChange1} class="form-control mb-4" pattern ="[A-Za-z ]{1,20}" title="only upto 20 alphabetic characters" placeholder="Customer name" required/>
             <input type="password" name="customerPassword" onChange={this.handleChange2} class="form-control mb-4" pattern ="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title ="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder="Customer password" required/>
             <div class="modal-footer d-flex justify-content-center">
             <button class="btn btn-info" >Login</button>
            </div>
      </form>
        </div>
        </div>
    );
}
}

