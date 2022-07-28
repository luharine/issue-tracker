import React, { useState } from 'react'
import './CurrentIssue.css'


function CurrIssue(props) {
    const [addIssue,setAddIssue]=useState(false);
    const [showIssue,setShowIssue] = useState(true)
    console.log("asdad") ;
    console.log(props.obj);
    
   
return ( showIssue &&
    
    
  
<div> 

    <div className='grey-card-container'>
    <div className='current-issues'>
        <div className='indv-issue'>

            <p onClick={()=>{setShowIssue(false)}} className='close-issue'>Close Issue</p>
        <p >Assigned To <span key={props.obj.AssignedTo} > {props.obj.AssignedTo} </span></p>
        <p>Priority <span key={props.obj.priority}>{props.obj.priority} </span></p>
        <p className='description-text'>Description<span key={props.obj.description}> {props.obj.description}</span></p>
              <hr/>
    </div>
   </div>
            
   </div>
    
   </div>
    );
}


export default CurrIssue;