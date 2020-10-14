import React from 'react'
import './css/Customer.css'
import History from './History'
const axios = require('axios').default;

export default class AddProduct extends React.Component{

    state = { 
        productId: '',
        productName:'',
        productDescription:'',
        productQuantity:'',
        record:0
    };

    handleChange1 = event =>{
        this.setState({productId: event.target.value});
    };
    handleChange2 = event =>{
     this.setState({productName: event.target.value});
   };
   handleChange3 = event =>{
     this.setState({productDescription: event.target.value});
   };
   handleChange4 = event =>{
    this.setState({productQuantity: event.target.value});
  };

handleSubmit = event =>{
   event.preventDefault();

const product ={
    productId: this.state.productId,
    productName:this.state.productName,
    productDescription:this.state.productDescription,
    productQuantity:this.state.productQuantity
}

axios.post('http://localhost:8080/addproduct',product).then(response =>{
    this.setState({record: response.data})
    if(this.state.record!=null){
      alert('Product added successfully');
      setTimeout("location.reload(true)");
      History.push('/admin');  
   }
})
.catch(handleErrors)

function handleErrors(err){
  if(err.response){
    alert("Product not added");
    setTimeout("location.reload(true)");
    History.push('/admin'); 
  }
 }}
    render(){
    return (
        <div>
        <form class="border2 border-light p-5" onSubmit={this.handleSubmit}>
        <p class="h4 mb-4 text-left">Add new product</p>
        <input type="text" name="productId" onChange={this.handleChange1} class="form-control mb-4" pattern="([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])" title="enter valid id in a range between 1-9999" placeholder="Product Id" required/>
        <input type="text" name="productName" onChange={this.handleChange2} class="form-control mb-4" pattern ="[A-Za-z ]{1,20}" title="only upto 20 alphabetic characters" placeholder="Product Name" required/>
        <input type="text" name="productDescription" onChange={this.handleChange3} class="form-control mb-4" pattern="[a-zA-Z .]*" title="enter a valid decription" placeholder="Product Description" required/>
        <input type="text" name="productQuantity" onChange={this.handleChange4} class="form-control mb-4" pattern="([1-9]|[1-9][0-9]|100)" title="enter a valid quantity in range between(1-100)" placeholder="Product Quantity" required/>
        <div class="modal-footer d-flex justify-content-center">
        <button type ="submit" class="btn btn-info" >Add</button>
        </div>
        </form>
  </div>
    )
}
}

