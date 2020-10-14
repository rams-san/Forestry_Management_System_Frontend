import React from 'react'
import './css/Customer.css'
import History from './History'
const axios = require('axios').default;
export default class DeleteScheduler extends React.Component{

    state = { 
        schedulerId:'',
        record:''
    };


    handleChange1 = event =>{
        this.setState({schedulerId: event.target.value});
    };

handleSubmit = event =>{
   event.preventDefault();

   var scheduler ={
    schedulerId: this.state.schedulerId
}
axios.delete('http://localhost:8080/deletescheduler',{params:scheduler}).then(response =>{
          this.setState({record: response.data})
          console.log(response.data)
          if(this.state.record.status===200){
            alert('Scheduler deleted successfully');
            setTimeout("location.reload(true)");
            History.push('/admin');  
          }
         
})
.catch(handleErrors)

function handleErrors(err){
  if(err.response){
    alert("Scheduler not deleted");
  }
 } 
}
    render(){
    return (
        <div>
             <form class="border2 border-light p-5" onSubmit={this.handleSubmit} method="delete">
             <p class="h4 mb-4 text-left">Delete scheduler</p>
             <input type="text" name="schedulerId" onChange={this.handleChange1} class="form-control mb-4" pattern="([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])" title="enter valid id in a range between 1-9999" placeholder="Scheduler Id" required/>
             <div class="modal-footer d-flex justify-content-center">
             <button type="submit" class="btn btn-info" >Delete</button>
             </div>
             </form>
        </div>
    )
}
}

