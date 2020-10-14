import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import './css/Tables.css'
const axios = require('axios').default;
export default function GetAllSchedulersRecordsCopy() {
const [state, setState] = useState([]);
    useEffect(() => {

        axios.get('http://localhost:8080/getallschedulersrecord').then((response) => {
          setState(response.data.schedulerListInfo)
        });

    }, []);
    const [state1,setState1] = useState(true);
    if(!state1){
      return <Redirect to="/customer"/>
    }
    return (
        <div>
            <div id ="back" class="fixed-action-btn">
<p class="p"><button type="button" class="btn btn-secondary" onClick={() => setState1(false)}><i class="fas fa-arrow-circle-left"></i>&nbsp;back</button></p>
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
      
      state.map( 
  scheduler =>
    <tr key = {scheduler.schedulerId}>
      <td>{scheduler.schedulerId}</td>
      <td>{scheduler.schedulerName}</td>
      <td>{scheduler.truckNumber}</td>
      <td>{scheduler.schedulerContact}</td>
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

