import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import {  Lname,name, Age, Gender,Profession} from "./store/action/action";
function App() {
  const firstName = useSelector((state)=>state.firstName)
  const lastName = useSelector((state)=>state.lastName)
  const age = useSelector((state)=>state.age)
  const gender = useSelector((state)=>state.gender)
  const profession = useSelector((state)=>state.profession)
 

  const dispatch = useDispatch()
  
  const [fvalue , setValue] = useState()
  const [lValue, setLValue] = useState()
  const [gValue, setGValue] = useState()
  const [aValue, setAValue] = useState()
  const [pValue, setPValue] = useState()
 
 return (
  
    <div className="App">
     
    
      
      <div className='text-sm text-white bg-red-500 '>
        <div className="flex flex-col">

        <input className="text-black" value={fvalue} onChange={(e)=>setValue(e.target.value)}/>
        <button onClick={()=>dispatch(name(fvalue))}>Dispatch</button>
        <div className="flex flex-col"></div>
        <input className="text-black" value={lValue} onChange={(e)=>setLValue(e.target.value)}/>
        <button onClick={()=>dispatch(Lname(lValue))}>Dispatch</button>
        <div className="flex flex-col"></div>
        <input className="text-black" value={aValue} onChange={(e)=>setAValue(e.target.value)}/>
        <button onClick={()=>dispatch(Age(aValue))}>Dispatch</button>
        <div className="flex flex-col"></div>
        <input className="text-black" value={gValue} onChange={(e)=>setGValue(e.target.value)}/>
        <button onClick={()=>dispatch(Gender(gValue))}>Dispatch</button>
        <div className="flex flex-col"></div>
        <input className="text-black" value={pValue} onChange={(e)=>setPValue(e.target.value)}/>
        <button onClick={()=>dispatch(Profession(pValue))}>Dispatch</button>
        </div>

        <div>firstName:{firstName}</div>
        <div>lastName:{lastName}</div>
        <div>Age:{age}</div>
        <div>Gender:{gender}</div>
        <div>Profession:{profession}</div>
        </div>
    </div>
  );
}

export default App;
