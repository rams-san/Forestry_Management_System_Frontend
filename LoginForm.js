import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import './css/LoginForm.css'
// {using useState}
//
// export default function LoginForm(){
//   const [state,setState] = useState(true);
//   const [state1,setState1] = useState(true);
//   if(!state){
//     return <Redirect to="/adminlogin"/>
//   }
//   if(!state1){
//     return <Redirect to="/customerlogin"/>
//   }
//     return (
//         <Router>
            
//         <div>
//         <div class="modal-body mx-3">
//             <form class="border1 border-light p-5">
//              <p class="h4 mb-4 text-left">Choose your option</p>
//              <div class="modal-footer d-flex justify-content-center">
//              <button class="btn btn-info" id="button1" onClick={() => setState(false)}>Admin Login</button> 
//              <button class="btn btn-info" id="button2" onClick={() => setState1(false)}>Customer login</button>
//             </div>
//             </form>
//         </div>     
//         </div>
//         </Router>
//     )
// }

// without useState
class LoginForm extends React.Component {
 
  state = {
    redirect: true,
    redirect1: true
  };
 
  renderRedirect = () =>{
    if(!this.state.redirect){
      return <Redirect to="/adminlogin"/>
    }
  }

  renderRedirect1 = () =>{
    if(!this.state.redirect1){
      return <Redirect to="/customerlogin"/>
    }
  }
  setRedirect = () =>{
    this.setState({redirect:false})
  };

  setRedirect1 = () =>{
    this.setState({redirect1: false})
   
  };

  render(){
    return(
            
    <div>
       {this.renderRedirect()}
           {this.renderRedirect1()}
    <div class="modal-body mx-3">
        <form class="border1 border-light p-5">
         <p class="h4 mb-4 text-left">Choose your option</p>
         <div class="modal-footer d-flex justify-content-center">
          
         <button class="btn btn-info" id="button1" onClick={this.setRedirect}>Admin Login</button> 
         <button class="btn btn-info" id="button2" onClick={this.setRedirect1}>Customer login</button>
        </div>
        </form>
    </div>     
    </div>

  )
}
}
export default LoginForm
