import React from 'react'
import './css/Customer.css'
import History from './History'
const axios = require('axios').default;
export default class DeleteLand extends React.Component {

    state = { 
        surveyNumber:'',
        record:0
    };


    handleChange1 = event =>{
        this.setState({surveyNumber: event.target.value});
    };

handleSubmit = event =>{
   event.preventDefault();

   var land ={
    surveyNumber: this.state.surveyNumber
}
axios.delete('http://localhost:8080/deleteland',{params:land}).then(response =>{
          this.setState({record: response.data})
          console.log(response.data);
          if(this.state.record.status===200){
            alert('Land deleted successfully');
            setTimeout("location.reload(true)");
            History.push('/admin');  
         }
})
.catch(handleErrors)

function handleErrors(err){
  if(err.response){
    alert("Land not deleted");
  }
 } 
}

    render(){
    return (
        <div>
        <form class="border2 border-light p-5" onSubmit={this.handleSubmit} method="delete">
        <p class="h4 mb-4 text-left">Delete land</p>
        <input type="text" name="surveyNumber" onChange={this.handleChange1} class="form-control mb-4" pattern="([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])" title="enter valid survey number in a range between 1-9999" placeholder="Survey number" required/>
        <div class="modal-footer d-flex justify-content-center">
        <button type="submit" class="btn btn-info" >Delete</button>
        </div>
        </form>
   </div>
    )
}
}

