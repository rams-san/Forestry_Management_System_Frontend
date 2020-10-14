import React from 'react'
import './css/Customer.css'
import History from './History'
const axios = require('axios').default;

export default class DeleteAdmin extends React.Component{

    state = { 
        adminName:'',
        record:0
    };


    handleChange1 = event =>{
        this.setState({adminName: event.target.value});
    };

handleSubmit = event =>{
   event.preventDefault();

   var admin ={
    adminName: this.state.adminName
}
axios.delete('http://localhost:8080/deleteadmin',{params:admin}).then(response =>{
          this.setState({record: response.data})
          console.log(response.data)
          if(this.state.record.status===200){
            alert('Admin deleted successfully');
            setTimeout("location.reload(true)");
            History.push('/admin');  
          }
         
})
.catch(handleErrors)

function handleErrors(err){
  if(err.response){
    alert("Admin not deleted");
  }
 } 
}

    render(){
    return (
        <div>
             <form class="border2 border-light p-5" onSubmit={this.handleSubmit} method="delete">
             <p class="h4 mb-4 text-left">Delete admin</p>
             <input type="text" name="adminName" onChange={this.handleChange1} class="form-control mb-4" pattern ="[A-Za-z ]{1,20}" title="only upto 20 alphabetic characters" placeholder="Admin name" required/>
             <div class="modal-footer d-flex justify-content-center">
             <button class="btn btn-info" >Delete</button>
             </div>
             </form>
        </div>
    )
}
}

