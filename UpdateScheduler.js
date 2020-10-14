import React from 'react'
import './css/Customer.css'
import History from './History'
const axios = require('axios').default;

export default class UpdateScheduler extends React.Component {

  state = { 
    schedulerId: '',
    schedulerName:'',
    schedulerContact:'',
    truckNumber:'',
    record:''
};

handleChange1 = event =>{
    this.setState({schedulerId: event.target.value});
};
handleChange2 = event =>{
 this.setState({schedulerName: event.target.value});
};
handleChange3 = event =>{
 this.setState({schedulerContact: event.target.value});
};
handleChange4 = event =>{
this.setState({truckNumber: event.target.value});
};

handleSubmit = event =>{
event.preventDefault();

const scheduler ={
  schedulerId: this.state.schedulerId,
  schedulerName:this.state.schedulerName,
  schedulerContact:this.state.schedulerContact,
  truckNumber:this.state.truckNumber
}

axios.put('http://localhost:8080/updatescheduler',scheduler).then(response =>{
  this.setState({record: response.data})
  if(this.state.record!=null){
    alert('Scheduler updated successfully');
    setTimeout("location.reload(true)");
    History.push('/admin');  
 }
})
.catch(handleErrors)

function handleErrors(err){
  if(err.response){
    alert("Scheduler not updated");
    setTimeout("location.reload(true)");
    History.push('/admin');  
  }
 }
}

  render(){
    return (
        <div>
        <form class="border2 border-light p-5" onSubmit={this.handleSubmit}>
        <p class="h4 mb-4 text-left">Update scheduler</p>
        <input type="text" name="schedulerId" onChange={this.handleChange1} class="form-control mb-4" pattern="([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])" title="enter valid id in a range between 1-9999" placeholder="Scheduler Id" required/>
        <input type="text" name="schedulerName" onChange={this.handleChange2} class="form-control mb-4" pattern ="[A-Za-z ]{1,20}" title="only upto 20 alphabetic characters" placeholder="scheduler Name"required/>
        <input type="text" name="schedulerContact" onChange={this.handleChange3} class="form-control mb-4" pattern="^\d{10}$" maxLength="10" title="enter a valid contact" placeholder="scheduler Contact"required/>
        <input type="text" name="truckNumber" onChange={this.handleChange4} class="form-control mb-4" pattern ="[a-zA-Z0-9 ]*" title="e.g MH 29 3145" placeholder="Truck Number"required/>
        <div class="modal-footer d-flex justify-content-center">
        <button type ="submit" class="btn btn-info" >Update</button>
        </div>
        </form>
      </div>
    )
}
}

