import React from 'react'
import './css/Customer.css'
import History from './History'
const axios = require('axios').default;
export default class GetLand extends React.Component {

  state = { 
    surveyNumber:'',
    record:0,
    redirect:true
};

 
setRedirect = () =>{
  History.push('/admin');
  setTimeout("location.reload(true)");  
};


handleChange1 = event =>{
    this.setState({surveyNumber: event.target.value});
};

handleSubmit = event =>{

event.preventDefault();

var land ={
  surveyNumber: this.state.surveyNumber
}
axios.get('http://localhost:8080/getland',{params:land}).then(response =>{
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
            <h1 className = "text-center">Lands List</h1>
<table id="tablePreview" className = "table table-bordered">
  <thead>
    <tr>
      <th>Survey number</th>
      <th>Owner name</th>
      <th>Land area</th>
    </tr>
  </thead>
  <tbody>
   
    {
      
  
    <tr key = {this.state.record.land.surveyNumber}>
      <td>{this.state.record.land.surveyNumber}</td>
      <td>{this.state.record.land.ownerName}</td>
      <td>{this.state.record.land.landArea}</td>
     
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
          <p class="h4 mb-4 text-left">Search land</p>
            <input type="text" id="surveyNumber" onChange={this.handleChange1} class="form-control mb-4" pattern="([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])" title="enter valid survey number in a range between 1-9999" placeholder="Survey number" required/>
            <div class="modal-footer d-flex justify-content-center">
            <button type="submit" class="btn btn-info" >Get</button>
            </div>
        </form>
   </div>
    )
}
}

