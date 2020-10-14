import React from 'react'
import './css/Customer.css'
import History from './History'
const axios = require('axios').default;
export default class DeleteProduct extends React.Component {

    state = { 
        productId:'',
        record:''
    };


    handleChange1 = event =>{
        this.setState({productId: event.target.value});
    };

handleSubmit = event =>{
   event.preventDefault();

   var product ={
    productId: this.state.productId
}
axios.delete('http://localhost:8080/deleteproduct',{params:product}).then(response =>{
          this.setState({record: response.data})
          console.log(response.data)
          if(this.state.record.status===200){
            alert('Product deleted successfully');
            setTimeout("location.reload(true)");
            History.push('/admin');  
          }
         
})
.catch(handleErrors)

function handleErrors(err){
  if(err.response){
    alert("Product not deleted");
  }
 } 
}

    render(){
    return (
        <div>
        <form class="border2 border-light p-5" onSubmit={this.handleSubmit} method="delete">
        <p class="h4 mb-4 text-left">Delete product</p>
        <input type="text" name="productId" onChange={this.handleChange1} class="form-control mb-4" pattern="([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])" title="enter valid id in a range between 1-9999" placeholder="Product Id" required/>
        <div class="modal-footer d-flex justify-content-center">
        <button type="submit" class="btn btn-info" >Delete</button>
        </div>
        </form>
   </div>
    )
}
}

