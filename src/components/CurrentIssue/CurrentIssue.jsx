import React, { useState } from 'react'
import './CurrentIssue.css'
import { arr } from '../AddIssue/AddIssue';
import CurrIssue from './CurrIssue';

function CurrentIssue() {
    const [addIssue,setAddIssue]=useState(false);
   
  

 let issues =arr.map((obj)=>{
    return ( 
        
     
        <CurrIssue obj={obj}/>

    
         
    );
    
})

return(
 <div>
    {issues}
 </div>

);





}


export default CurrentIssue;