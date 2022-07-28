import React, { useState } from 'react'
import './CurrentIssue.css'
import { arr } from '../AddIssue/AddIssue';


function CurrIssue(props) {
    const [addIssue,setAddIssue]=useState(false);
    const [showIssue,setShowIssue] = useState(true)
    
    
    function deleteobj()
    {    setShowIssue(false);
       // console.log(arr);
        console.log(props.obj)
        console.log(arr);
        arr.splice(arr.findIndex(a => a.AssignedTo === props.obj.AssignedTo) , 1)

        //arr.splice(arr.findIndex(props.obj),1);
        // console.log("deleted" + props)
        console.log(arr)
        
       
    }
   
return ( showIssue &&
    
    
  
<div> 

    <div className='grey-card-container'>
    <div className='current-issues'>
        <div className='indv-issue'>

            <p onClick={()=>{deleteobj() }   } className='close-issue'>Close Issue</p>
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