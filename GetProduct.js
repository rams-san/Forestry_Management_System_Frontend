import React from 'react'
import './css/Customer.css'
import History from './History'
const axios = require('axios').default;
export default class GetProduct extends React.Component  {

    state = { 
        productId:'',
        record:0,
        redirect:true
    };
    
     
    setRedirect = () =>{
      History.push('/admin');
      setTimeout("location.reload(true)");  
    };
    
    
    handleChange1 = event =>{
        this.setState({productId: event.target.value});
    };
    
    handleSubmit = event =>{
    
    event.preventDefault();
    
    var product ={
        productId: this.state.productId
    }
    axios.get('http://localhost:8080/getproduct',{params:product}).then(response =>{
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
            return (
                <div>
                  <div id ="back" class="fixed-action-btn">
        <p class="p"><button type="button" class="btn btn-secondary" onClick={this.setRedirect}><i class="fas fa-arrow-circle-left"></i>&nbsp;back</button></p>
        </div>
                    <h1 className = "text-center">Products List</h1>
        <table id="tablePreview" className = "table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
           
            {
              
            <tr key = {this.state.record.product.productId}>
              <td>{this.state.record.product.productId}</td>
              <td>{this.state.record.product.productName}</td>
              <td>{this.state.record.product.productQuantity}</td>
              <td>{this.state.record.product.productDescription}</td>
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
               <p class="h4 mb-4 text-left">Search product</p>
                 <input type="text" id="productId" onChange={this.handleChange1} class="form-control mb-4" pattern="([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])" title="enter valid id in a range between 1-9999" placeholder="Product Id" required/>
                 <div class="modal-footer d-flex justify-content-center">
                 <button type="submit" class="btn btn-info" >Get</button>
                 </div>
             </form>
        </div>
    )
}
}

