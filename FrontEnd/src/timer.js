import React from 'react'


const timer = () => {
    const date = new Date();
    const showTime = date.getHours() 
        + ':' + date.getMinutes() 
        + ":" + date.getSeconds();
 
  return (
    
      <div>
            <h1>helloooooo</h1>
            <h2>you are successfully loged in the time : {showTime}</h2>
        </div>
   
  )
}

export default timer;


