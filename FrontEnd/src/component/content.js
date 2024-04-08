import React, { useState } from "react";
import axios from "axios";

const Content = () => {
  const [loginTime, setLoginTime] = useState(null); // Initialize loginTime as null
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    const currentTime = new Date().toISOString().slice(0, 19).replace("T", " "); // Format date as 'YYYY-MM-DD HH:MM:SS'

    setLoginTime(currentTime);
    setIsLoggedIn(true);

    const data = { Time_activity: currentTime };
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
