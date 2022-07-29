
import './App.css';
import Addissue from './components/AddIssue/AddIssue'
import CurrentIssue from './components/CurrentIssue/CurrentIssue'
import { useState } from 'react';
import { arr } from './components/AddIssue/AddIssue';


function App() {

  const [addIssue,setAddIssue]=useState(true)
  
  
  return (
    <div className="App">


      <h1>Issue Tracker</h1>
      <h3>Active-issues: {arr.length}</h3>
      <div  className='grey-card-contianer'>
      {addIssue?< Addissue/>:<CurrentIssue/>}
      </div>
      
    <div className='view-selection-div'>
     <button onClick={()=>setAddIssue(false) } className='view-button' >Current issues</button>
     <button onClick={()=>setAddIssue(true)} className='view-button active-button'>Add issues</button>
     </div>
      
   
    </div>
  );
}

export default App;
