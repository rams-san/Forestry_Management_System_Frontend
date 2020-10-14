import React from 'react'
import './css/Customer.css'
import History from './History'
const axios = require('axios').default;
export default class GetScheduler extends React.Component {

    state = { 
        schedulerId:'',
        record:0,
        redirect:true
    };
    
     
    setRedirect = () =>{
      History.push('/admin');
      setTimeout("location.reload(true)");  
    };
    
    
    handleChange1 = event =>{
        this.setState({schedulerId: event.target.value});
    };
    
    handleSubmit = event =>{
    
    event.preventDefault();
    
    var scheduler ={
        schedulerId: this.state.schedulerId
    }
    axios.get('http://localhost:8080/getscheduler',{params:scheduler}).then(response =>{
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
                    <h1 className = "text-center">Scheduler List</h1>
        <table id="tablePreview" className = "table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Truck number</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
           
            {
              
       
            <tr key = {this.state.record.scheduler.schedulerId}>
              <td>{this.state.record.scheduler.schedulerId}</td>
              <td>{this.state.record.scheduler.schedulerName}</td>
              <td>{this.state.record.scheduler.truckNumber}</td>
              <td>{this.state.record.scheduler.schedulerContact}</td>
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
               <p class="h4 mb-4 text-left">Search scheduler</p>
                 <input type="text" id="schedulerId" onChange={this.handleChange1} class="form-control mb-4" pattern="([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])" title="enter valid id in a range between 1-9999" placeholder="Scheduler Id" required/>
                 <div class="modal-footer d-flex justify-content-center">
                 <button class="btn btn-info" >Get</button>
                 </div>
             </form>
        </div>
    )
}
}

