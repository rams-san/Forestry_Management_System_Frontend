import React from 'react'
import History from './History'
const axios = require('axios').default;
export default class AdminLogin extends React.Component{

  state = { 
    adminName:'',
    adminPassword:'',
    record:0,
    redirect:true
};

 
setRedirect = () =>{
  History.push('/admin');
  setTimeout("location.reload(true)");  
};


handleChange1 = event =>{
    this.setState({adminName: event.target.value});
};

handleChange2 = event =>{
  this.setState({adminPassword: event.target.value});
};

handleSubmit = event =>{

event.preventDefault();

var admin ={
  adminName: this.state.adminName,
  adminPassword: this.state.adminPassword
}
axios.get('http://localhost:8080/loginadmin',{params:admin}).then(response =>{
      this.setState({record: response.data})
      console.log(response.data)    
      if(this.state.record.status===200)
      {
        alert('login successful');
        setTimeout("location.reload(true)");
        History.push('/admin');
      
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
             <input type="text"onChange={this.handleChange1}id="adminName" name="adminName" class="form-control mb-4" pattern ="[A-Za-z ]{1,20}" title="only upto 20 alphabetic characters" placeholder="Admin name" required/>
             <input type="password" onChange={this.handleChange2} id="adminPassword" name="adminPassword" class="form-control mb-4" pattern ="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title ="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder="Admin password" required/>
             <div class="modal-footer d-flex justify-content-center">
             <button type="submit" class="btn btn-info" >Login</button>
             </div>
             </form>
            </div>
        </div>
    );
}
}
 
