
import './App.css';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Message from './components/Message'
// import Counter from './components/Counter'
// import ParentComponent from './components/ParentComponent';
import Addissue from './components/AddIssue/AddIssue'
import CurrentIssue from './components/CurrentIssue/CurrentIssue'
import { useState } from 'react';



function App() {

  const [addIssue,setAddIssue]=useState(true)
  return (
    <div className="App">

      <h1>Issue Tracker</h1>
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
