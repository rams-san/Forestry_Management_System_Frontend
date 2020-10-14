import React from 'react'
import {BrowserRouter as Router, NavLink, Link, Switch, Redirect, useHistory} from 'react-router-dom';
import History from './History'
import './css/Customer.css'

const axios = require('axios').default;

export default class AddAdmin extends React.Component{

    state = { 
        adminName: '',
        adminPassword: '',
        record:0
    };


    handleChange1 = event =>{
        this.setState({adminName: event.target.value});
    };
    handleChange2 = event =>{
     this.setState({adminPassword: event.target.value});
   };

handleSubmit = event =>{
   event.preventDefault();

const admin ={
    adminName: this.state.adminName,
    adminPassword:this.state.adminPassword,
}

axios.post('http://localhost:8080/addadmin',admin).then(response =>{
          this.setState({record: response.data})
          if(this.state.record.status===200){
            alert('Admin added successfully');
            setTimeout("location.reload(true)");
            History.push('/admin');  
         }
})
.catch(handleErrors)

function handleErrors(err){
  if(err.response){
    alert("Admin not added");
    setTimeout("location.reload(true)");
    History.push('/admin');  
  }
 }
}

    render(){
    return (
        <div>
        <form class="border2 border-light p-5" onSubmit={this.handleSubmit} method="post">
        <p class="h4 mb-4 text-left">Add new admin</p>
        <input type="text" name="adminName" onChange={this.handleChange1} class="form-control mb-4" pattern ="[A-Za-z ]{1,20}" title="only upto 20 alphabetic characters" placeholder="Admin name" required/>
        <input type="password" name="adminPassword" onChange={this.handleChange2} class="form-control mb-4" pattern ="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title ="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder="Admin password" required/>
        <div class="modal-footer d-flex justify-content-center">
        <button type="submit" class="btn btn-info">Add</button>
        </div>
        </form>
        </div>
    )
}
}

