import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import book from './GetAllAdmins';
import './css/Tables.css'
const axios = require('axios').default;
export default function GetAllAdminsRecords(){
  const [state, setState] = useState([]);
  useEffect(() => {

      axios.get('http://localhost:8080/getalladminsrecord').then((response) => {
        setState(response.data.adminListInfo)
        console.log(response.data.adminListInfo);
        console.log(response.data);
        // console.log(book);
      });

  }, []);
const [state1,setState1] = useState(true);
if(!state1){
  return <Redirect to="/admin"/>
}
    return (
        <div>
          
<div id ="back" class="fixed-action-btn">
<p class="p"><button type="button" class="btn btn-secondary" onClick={() => setState1(false)}><i class="fas fa-arrow-circle-left"></i>&nbsp;back</button></p>
</div>
            <h1 className = "text-center">Admins List</h1>
<table id="tablePreview" className = "table table-bordered">
  <thead>
    <tr>
      <th>No</th>
      <th>Admin Name</th>
    </tr>
  </thead>
  <tbody>
   
    {
 state.map(
  admin =>
    <tr key = {admin.adminName}>
      <th scope="row">1</th>
      <td>{admin.adminName}</td>
    </tr>
  )
 
  }
 
  </tbody>
  {/* <!--Table body--> */}
</table>
{/* <!--Table--> */}
        </div>
    )
}


