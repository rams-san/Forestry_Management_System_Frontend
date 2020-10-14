import React from 'react'
import './css/Customer.css'
import History from './History'
const axios = require('axios').default;

export default class DeleteContract extends React.Component {

    state = { 
        contractNumber:'',
        record:0
    };


    handleChange1 = event =>{
        this.setState({contractNumber: event.target.value});
    };

handleSubmit = event =>{
   event.preventDefault();

   var contract ={
    contractNumber: this.state.contractNumber
}
axios.delete('http://localhost:8080/deletecontract',{params:contract}).then(response =>{
          this.setState({record: response.data})
          console.log(response.data)
          if(this.state.record.status===200){
            alert('Contract deleted successfully');
            setTimeout("location.reload(true)");
            History.push('/admin');  
          }
         
})
.catch(handleErrors)

function handleErrors(err){
  if(err.response){
    alert("Contract not deleted");
  }
 } 
}
    render(){
    return (
        <div>
             <form class="border2 border-light p-5" onSubmit={this.handleSubmit} method="delete">
             <p class="h4 mb-4 text-left">Delete contract</p>
             <input type="text" name="contractNumber" onChange={this.handleChange1} class="form-control mb-4" pattern="([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])" title="enter valid id in a range between 1-9999" placeholder="Contract number" required/>
             <div class="modal-footer d-flex justify-content-center">
             <button type="submit" class="btn btn-info" >Delete</button>
             </div>
             </form>
        </div>
    )
}
}
