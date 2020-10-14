import React,{useState} from 'react'
import History from './History' 
import './css/Customer.css'
function GetAllSchedulersCopy() {
    const [state1,setState1] = useState(true);
    
    if(!state1){
        // return <Redirect to="/getallschedulersrecords"/>
        History.push('/getallschedulersrecordscopy');
      }
    return (
        <div>
        <form class="border2 border-light p-5" onSubmit={() => setState1(false)} method="get">
               <p class="h4 mb-4 text-left">Get list of schedulers</p>
               <div class="modal-footer d-flex justify-content-center">
               <button type="submit" class="btn btn-info" >Get</button>
               </div>
        </form>
        </div>
    )
}

export default GetAllSchedulersCopy