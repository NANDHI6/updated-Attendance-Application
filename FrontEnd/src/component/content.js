import React, { useState } from "react";
import axios from "axios";

const Content = () => {
  const [loginTime, setLoginTime] = useState(null); // Initialize loginTime as null
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    const currentTime = new Date().toISOString().slice(0, 19).replace("T", " "); // Format date as 'YYYY-MM-DD HH:MM:SS'

    setLoginTime(currentTime);
    setIsLoggedIn(true);
    const email = "nandhini@gmail.com";
    const login = "login";
    const data = {
      Time_activity: currentTime,
      Userid: email,
      Activity_type: login,
    };
    console.log(data);

    axios
      .post("http://localhost:8095/attendance1", data)
      .then((response) => {
        console.log("Login time stored successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error storing login time:", error);
      });
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <div>
        <h2>Hi Good Morning!! </h2>
        <h3>How are you </h3>
        <h3>Enjoy your work</h3>

        {!isLoggedIn && <button onClick={handleLoginClick}>Log In</button>}
        {isLoggedIn && loginTime && (
          <p id="login-time">Logged in at: {loginTime}</p>
        )}
        {isLoggedIn && <button onClick={handleLogoutClick}>Log Out</button>}
      </div>
    </>
  );
};
export default Content;

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

// import React, { useState } from "react";
// import axios from "axios";

// const Content = () => {
//   const [loginTime, setLoginTime] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLoginClick = () => {
//     const currentTime = new Date().toISOString().slice(0, 19).replace("T", " ");
//     setLoginTime(currentTime);
//     setIsLoggedIn(true);

//     const data = { Time_Activity: currentTime };

//     axios
//       .post("http://localhost:8091/attendancedb/login", data) // Adjusted endpoint for login
//       .then((response) => {
//         console.log("Login time stored successfully:", response.data);
//       })
//       .catch((error) => {
//         console.error("Error storing login time:", error);
//       });
//   };

//   const handleLogoutClick = () => {
//     const logoutTime = new Date().toISOString().slice(0, 19).replace("T", " ");

//     const data = {
//       Time_Activity: logoutTime, // Use logoutTime for storing logout time
//     };

//     axios
//       .post("http://localhost:8091/attendancedb/logout", data) // Adjusted endpoint for logout
//       .then((response) => {
//         console.log("Logout time stored successfully:", response.data);
//       })
//       .catch((error) => {
//         console.error("Error storing logout time:", error);
//       });

//     setIsLoggedIn(false);
//     setLoginTime(null);
//   };

//   return (
//     <>
//       <div>
//         {!isLoggedIn && <button onClick={handleLoginClick}>Log In</button>}
//         {isLoggedIn && loginTime && (
//           <p id="login-time">Logged in at: {loginTime}</p>
//         )}
//         {isLoggedIn && <button onClick={handleLogoutClick}>Log Out</button>}
//       </div>
//     </>
//   );
// };

// export default Content;
