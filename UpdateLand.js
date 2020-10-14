import React from 'react'
import './css/Customer.css'
import History from './History'
const axios = require('axios').default;

export default class UpdateLand extends React.Component{
    
    state = { 
               surveyNumber: '',
               ownerName:'',
               landArea:'',
               record:0
           };

           handleChange1 = event =>{
               this.setState({surveyNumber: event.target.value});
           };
           handleChange2 = event =>{
            this.setState({ownerName: event.target.value});
          };
          handleChange3 = event =>{
            this.setState({landArea: event.target.value});
          };

      handleSubmit = event =>{
          event.preventDefault();
       
      const land ={
        surveyNumber: this.state.surveyNumber,
        ownerName:this.state.ownerName,
        landArea:this.state.landArea
      }

      axios.put('http://localhost:8080/updateland',land).then(response =>{
        this.setState({record: response.data})
        if(this.state.record!=null){
          alert('Land updated successfully');
          setTimeout("location.reload(true)");
          History.push('/admin');  
       }
      })
      .catch(handleErrors)

      function handleErrors(err){
        if(err.response){
          alert("Land not updated");
          setTimeout("location.reload(true)");
          History.push('/admin');
        }
       }
      }
           render(){
    return (
        <div>
        <form class="border2 border-light p-5"  onSubmit={this.handleSubmit}>
        <p class="h4 mb-4 text-left">Update land</p>
        <input type="text" name="surveyNumber" onChange={this.handleChange1} class="form-control mb-4" pattern="([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])" title="enter valid survey number in a range between 1-9999" placeholder="Survey number"required/>
        <input type="text"  name="ownerName" onChange={this.handleChange2} class="form-control mb-4" pattern ="[A-Za-z ]{1,20}" title="only upto 20 alphabetic characters" placeholder="Owner name" required/>
        <input type="text"  name="landArea"  onChange={this.handleChange3} class="form-control mb-4" pattern="[+-]?([0-9]*[.])?[0-9]+" title="enter valid land area" placeholder="Land Area"required/>
        <div class="modal-footer d-flex justify-content-center">
        <button type="submit" class="btn btn-info" >Update</button>
        </div>
        </form>
        </div>
    );
}

}
