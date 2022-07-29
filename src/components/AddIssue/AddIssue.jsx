import React, { useState } from 'react'
import './AddIssue.css'
import CurrentIssue from '../CurrentIssue/CurrentIssue';
export let arr=[]

 function AddIssue() {
  

  let [description, setDescription] = useState('');
  let [priority, setPriority] = useState('');
  let [AssignedTo,setAssignedTo]=useState('');

  const handleSubmit = event => {
    
   let obj = {
      'description':description,
      'priority':priority,
      'AssignedTo':AssignedTo

    }

    event.preventDefault();

    arr.push(obj);
    console.log('handleSubmit ran');
    
  console.log(arr)
    
   

   
    console.log(description);
    console.log(priority);
    console.log(AssignedTo);
   

    setDescription('');
    setPriority('');
    setAssignedTo('');
    
  };


  



  



    const [AddIssue,setAddIssue] = useState(true)
  return (
    <div className='add-issue'>
        <form onSubmit={handleSubmit}>
            <label>Description<input onChange={(event)=>{setDescription(event.target.value);}} type= "text" placeholder='Describe the issue' value={description}/></label>
      <label> Assigned to :
      {/* <select  onChange={(event)=>setAssignedTo=event.target.value}  name="dev" id="dev"> 
           <option value="Names">None</option>
            <option value="Ankit">Ankit</option>
            <option value="Brain">Brain</option>
            <option value="Mehul">Mehul</option>
            <option value="Aarthi">Aarthi</option>
      </select> */}
      <input onChange={(event)=>setAssignedTo(event.target.value)} type= "text" placeholder='Assigned to' value={AssignedTo}/>
      </label>
<label> Priority : 
<input onChange={(event)=>setPriority(event.target.value)} type= "text" placeholder='Priority' value={priority}/>
{/* <select onChange={(event)=>setPriority=(event.target.value)} name="priority" id="priorty"> 
<option value="None">None</option>
  <option value="Low">Low</option>
  <option value="Medium">Medium</option>
  <option value="High">High</option>
  <option value="Ultra High">Ultra High</option>
  
</select> */}
</label>
<button type = "submit" onClick={()=>handleSubmit()}>ADD ISSUE</button>
        </form> 
  
         


    </div>
  )
}
export default AddIssue
