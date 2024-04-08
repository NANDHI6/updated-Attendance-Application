// import React from 'react'
// import { useState } from 'react';
// import axios from 'axios' ;  
// const Form = () => {
    
//     const [inputValue,setInputValue] = useState({
//       ID: '',
//       User_Name:'',
//       Login_Time: '',
//       Logout_Time: '',
//       Breakin_Time: '',
//       Breakout_Time: ' ',
     
//     });


//     // assign value to  setvalue function//
//  const handleChange = (event) => {
//      setInputValue({...inputValue, [event.target.name]: event.target.value})
//   };

// // press submit button prevent default//
//   const handleSubmit = (event) => {
      
//   event.preventDefault();
  
//   axios.post('http://localhost:8088/attendance', inputValue)//inside we write api to post the data in mysql
//  .then(res=> console.log("reg successfully"))
//  .catch(err=> console.log(err));
// }
    
//   return (
//     <div>
//       <>
 

// {/* (inside component) */}
// {/* //for onchange value will save in this usestate// */}




// {/* (inside return) */}
// {/* //input// */}
// <form onSubmit={handleSubmit}>
// <input type="text" id="pro-title" placeholder="id" name='ID' onChange={handleChange}/>
// <input type="text" id="pro-title" placeholder="name" name='User_Name' onChange={handleChange}/>

// <input type="time" id="pro-title" placeholder=""  name='Login_Time' onChange={handleChange}/>

// <input type="time" id="pro-title" placeholder=""  name='Logout_Time' onChange={handleChange}/>

// <input type="time" id="pro-title" placeholder="username"  name='Login_Time' onChange={handleChange}/>
// <input type="text" id="pro-title" placeholder="username"  name='Logout_Time' onChange={handleChange}/>

// <button type='submit' id='sub'>Submit</button>
// </form>




{/* (onsubmit) */}


// </>
//     </div>
//   )
    
  
// }

// export default Form;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function UserLog() {
//   const [userLogs, setUserLogs] = useState([]);

//   useEffect(() => {
//     // Fetch user login information from backend API
//     axios.post('http://localhost:8088/attendance')
//       .then(response => {
//         setUserLogs(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching user logs:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>User Login Information</h2>
//       {/* <ul>
//         {userLogs.map((log, index) => (
//           <li key={index}>
//             Username: {log.User_Name}, Login Time: {log.Login_Time}, Logout Time: {log.Logout_Time}, Break-in Time: {log.Breakin_time}, Break-out Time: {log.Breakout_time}
//           </li>
//         ))}
//       </ul> */}
      
//       <table border='10'>
//           <thead>
//             <tr>
//                <th>ID</th>
//                <th>EMPLOYEE NAME</th>
//                <th>LOGIN TIME</th>
//                <th>lOGOUT TIME</th>
//                <th>BREAKIN TIME</th>
//                <th>BREAKOUT TIME</th>
//             </tr> 
//           </thead>
//           <tbody>
//                {userLogs.map((log,index)=>(
//                <tr>
//                   <td key={index} >{log.ID}</td>
//                    <td>{log.User_Name}</td>
//                     <td>{log.Login_Time}</td>
//                     <td>{log.Logout_Time}</td>
//                     <td>{log.Breakin_time_Time}</td>
//                     <td>{log.Breakout_timeout_Time}</td>

//                 </tr>
//                ))}
//           </tbody>
        
//       </table>
//     </div>
  
//   );
// }

// export default UserLog;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function UserLog() {
//   const [userLogs, setUserLogs] = useState([]);

//   useEffect(() => {
//     fetchUserLogs(); // Fetch user logs when component mounts
//   }, []);

//   const fetchUserLogs = () => {
//     // Fetch user login information from backend API
//     axios.get('http://localhost:8088/attendance')
//       .then(response => {
//         setUserLogs(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching user logs:', error);
//       });
//   };




  
//   const handleUpdateLogoutTime = (id) => {
//     const currentTime = new Date().toLocaleString();
//     axios.post('http://localhost:8088/logout', { Logout_Time: currentTime })
//       .then(response => {
//         console.log('Logout time updated successfully for ID:', id);
//         // After updating, fetch updated user logs
//         fetchUserLogs();
//       })
//       .catch(error => {
//         console.error('Error updating logout time:', error);
//       });
//   };

//   return (
//     <>
  
//       <table border='1'>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>USERNAME</th>
//             <th>LOGIN TIME</th>
//             <th>LOGOUT TIME</th>
//             <th>BREAKIN TIME</th>
//             <th>BREAKOUT TIME</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {userLogs.map((log, index) => (
//             <tr key={index}>
//               <td>{log.ID}</td>
//               <td>{log.User_Name}</td>
//               <td>{log.Login_Time}</td>
//               <td>{log.Logout_Time}</td>
//               <td>{log.Breakin_Time}</td>
//               <td>{log.Breakout_Time}</td>
//               <td>
//                 {log.Logout_Time ? (
//                   <button disabled>Logged Out</button>
//                 ) : (
//                   <button onClick={() => handleUpdateLogoutTime(log.ID)}>Log Out</button>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       </>
//   );
// }

// export default UserLog;


