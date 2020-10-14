import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import './css/Tables.css'
const axios = require('axios').default;
// import AdminService from './AdminService';
export default function GetAllLandsRecords() {
// without useEffect
//   constructor(props){
//     super(props)
//     this.state ={
//       count: 0,
//         lands:[]
//     }
// }
// componentDidMount(){
//   axios.get('http://localhost:8080/getalllandsrecord').then((response) =>{
//       this.setState({lands: response.data.landListInfo})
//   });
// }
const [state, setState] = useState([]);
    useEffect(() => {

        axios.get('http://localhost:8080/getalllandsrecord').then((response) => {
          setState(response.data.landListInfo)
        });

    })
    const [state1,setState1] = useState(true);
    if(!state1){
      return <Redirect to="/admin"/>
    }
    return (
        <div>
          <div id ="back" class="fixed-action-btn">
<p class="p"><button type="button" class="btn btn-secondary" onClick={() => setState1(false)}><i class="fas fa-arrow-circle-left"></i>&nbsp;back</button></p>
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
      
      state.map( 
  land =>
    <tr key = {land.surveyNumber}>
      <td>{land.surveyNumber}</td>
      <td>{land.ownerName}</td>
      <td>{land.landArea}</td>
     
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

