import React, { useState } from 'react'
import logo1 from "./pozent.png"
import { IoCloseOutline } from "react-icons/io5";
import Timer from "./component/timer.js";




const login = ({open,onClose}) => {
    if(!open) return null
    
function clicks(){
   alert("You are Succesfully logged in")
   
                    
                    
} 
// }
// const [show,setshow] = useState(true)
return ( 
    <div className='con1'>
      <div className='logincontainer'>
         <img src={logo1}alt="wrong something"></img>

        <div className='loginright'>
          <p onClick={onClose} className='cls-btn'><IoCloseOutline /></p>
          <div className='content'> 
             <h2>Hi Good Morning!! </h2>
             <h3>How are you </h3>
             <h3>Enjoy your work</h3>
          <button className='btn-container' onClick={clicks}>Clockin</button>
       
                   
      
        <Timer/>
          </div>
             
        </div>
          
      <div>
            
    </div>
          
  </div>
  </div>


  )
}



export default login;




