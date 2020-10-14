import React from 'react'
import './css/Customer.css'
import History from './History'
const axios = require('axios').default;
export default class GetContract extends React.Component {

    state = { 
        contractNumber:'',
        record:0,
        redirect:true
    };
    
     
    setRedirect = () =>{
      History.push('/admin');
      setTimeout("location.reload(true)");  
    };
    
    
    handleChange1 = event =>{
        this.setState({contractNumber: event.target.value});
    };
    
    handleSubmit = event =>{
    
    event.preventDefault();
    
    var contract ={
        contractNumber: this.state.contractNumber
    }
    axios.get('http://localhost:8080/getcontract',{params:contract}).then(response =>{
          this.setState({record: response.data})
          console.log(response.data)    
          if(this.state.record.status===200){
            alert('record found');
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
<p class="p"><button type="button" class="btn btn-secondary"  onClick={this.setRedirect}><i class="fas fa-arrow-circle-left"></i>&nbsp;back</button></p>
</div>
            <h1 className = "text-center">Contracts List</h1>
<table id="tablePreview" className = "table table-bordered">
  <thead>
    <tr>
      <th>Contract number</th>
      <th>Customer Id</th>
      <th>Product Id</th>
      <th>Scheduler Id</th>
      <th>Quantity</th>
      <th>Delivery date</th>
      <th>Delivery place</th>
    </tr>
  </thead>
  <tbody>
   
    {
      
    <tr key = {this.state.record.contract.contractNumber}>
      <td>{this.state.record.contract.contractNumber}</td>
      <td>{this.state.record.contract.customerId}</td>
      <td>{this.state.record.contract.productId}</td>
      <td>{this.state.record.contract.schedulerId}</td>
      <td>{this.state.record.contract.quantity}</td>
      <td>{this.state.record.contract.deliveryPlace}</td>
      <td>{this.state.record.contract.deliveryDate}</td>
    </tr>
 
 
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
             <form class="border2 border-light p-5" onSubmit={this.handleSubmit}>
               <p class="h4 mb-4 text-left">Search contract</p>
                 <input type="text" id="contactNumber" onChange={this.handleChange1} class="form-control mb-4" pattern="([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])" title="enter valid contract number in a range between 1-9999" placeholder="Contract number" required/>
                 <div class="modal-footer d-flex justify-content-center">
                 <button class="btn btn-info" >Get</button>
                 </div>
             </form>
        </div>
    )
}
}

