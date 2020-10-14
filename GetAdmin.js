import React from 'react'
import './css/Customer.css'
import History from './History'
const axios = require('axios').default;
export default class GetAdmin extends React.Component {
  
  state = { 
    adminName:'',
    record:'null',
    redirect:true
};

 
setRedirect = () =>{
  History.push('/admin');
  setTimeout("location.reload(true)");  
};


handleChange1 = event =>{
    this.setState({adminName: event.target.value});
};

handleSubmit = event =>{

event.preventDefault();

var admin ={
adminName: this.state.adminName
}
axios.get('http://localhost:8080/getadmin',{params:admin}).then(response =>{
      this.setState({record: response.data})
      console.log(response.data)
      console.log(this.state.record.admin.adminName)
      console.log(this.state.record.admin.adminPassword)

      if(this.state.record.status===200){
        alert('record found');
        // setTimeout("location.reload(true)");
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
      return(
        <div>
        <div id ="back" class="fixed-action-btn">
    <p class="p"><button type="button" class="btn btn-secondary" onClick={this.setRedirect} ><i class="fas fa-arrow-circle-left"></i>&nbsp;back</button></p>
    </div>
        <h1 className = "text-center">Admins List</h1>
    <table id="tablePreview" className = "table table-bordered">
    <thead>
    <tr>
    <th>No</th>
    <th>Admin Name</th>
    </tr>
    </thead>
    <tbody>
    
    {
    //  this.state.record.map(
  
    <tr key = {this.state.record.admin.adminName}>
    <th scope="row">1</th>
    <td>{this.state.record.admin.adminName}</td>
    </tr>
      // )
    
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
        <form class="border2 border-light p-5" onSubmit={this.handleSubmit} method="get">
          <p class="h4 mb-4 text-left">Search admin</p>
            <input type="text" id="adminName" onChange={this.handleChange1} class="form-control mb-4" pattern ="[A-Za-z ]{1,20}" title="only upto 20 alphabetic characters" placeholder="Admin name"/>
            <div class="modal-footer d-flex justify-content-center">
            <button type="submit" class="btn btn-info">Get</button>
            </div>
        </form>
    </div> 
    )
}
}
