// import React, { useState } from "react";
// import axios from "axios";

// const Content = () => {
//   const [loginTime, setLoginTime] = useState(null); // Initialize loginTime as null
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLoginClick = () => {
//     const currentTime = new Date().toISOString().slice(0, 19).replace("T", " "); // Format date as 'YYYY-MM-DD HH:MM:SS'

//     setLoginTime(currentTime);
//     setIsLoggedIn(true);
//     const email = "nandhini@gmail.com";
//     const login = "login";
//     const data = {
//       Login_time: currentTime,
//       Userid: email,
//       Activity_type: login,
//     };
//     console.log(data);

//     axios
//       .post("http://localhost:8095/attendance1", data)
//       .then((response) => {
//         console.log("Login time stored successfully:", response.data);
//       })
//       .catch((error) => {
//         console.error("Error storing login time:", error);
//       });
//   };

//   const handleLogoutClick = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <>
//       <div>
//         <h2>Hi Good Morning!! </h2>
//         <h3>How are you </h3>
//         <h3>Enjoy your work</h3>

//         {!isLoggedIn && <button onClick={handleLoginClick}>Log In</button>}
//         {isLoggedIn && loginTime && (
//           <p id="login-time">You are successfully Logged in at: {loginTime}</p>
//         )}
//         {isLoggedIn && <button onClick={handleLogoutClick}>Log Out</button>}
//       </div>
//     </>
//   );
// };
// export default Content;
// import React, { useState } from "react";
// import axios from "axios";

// const Content = () => {
//   const [loginTime, setLoginTime] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isBreakIn, setIsBreakIn] = useState(false);
//   const [isBreakOut, setIsBreakOut] = useState(false);

//   const handleLoginClick = () => {
//     const currentTime = new Date().toISOString().slice(0, 19).replace("T", " ");
//     setLoginTime(currentTime);
//     setIsLoggedIn(true);
//     setIsBreakIn(true); // Set break-in button to true after login
//     const email = "nandhini@gmail.com";
//     const login = "login";
//     const data = {
//       Login_time: currentTime,
//       Userid: email,
//       Activity_type: login,
//     };
//     axios
//       .post("http://localhost:8095/attendance1", data)
//       .then((response) => {
//         console.log("Login time stored successfully:", response.data);
//       })
//       .catch((error) => {
//         console.error("Error storing login time:", error);
//       });
//   };

//   const handleBreakInClick = () => {
//     // Handle break-in logic here
//     setIsBreakOut(true); // Set break-out button to true after break-in
//   };

//   const handleBreakOutClick = () => {
//     // Handle break-out logic here
//     // Assuming logout functionality is similar to break-out
//     setIsBreakOut(false);
//     setIsLoggedIn(false);
//   };

//   return (
//     <>
//       <div>
//         <h2>Hi Good Morning!! </h2>
//         <h3>How are you </h3>
//         <h3>Enjoy your work</h3>

//         {!isLoggedIn && <button onClick={handleLoginClick}>Log In</button>}
//         {isLoggedIn && (
//           <>
//             <p id="login-time">
//               You are successfully Logged in at: {loginTime}
//             </p>
//             {isBreakIn && (
//               <button onClick={handleBreakInClick}>Break In</button>
//             )}
//             {isBreakOut && (
//               <button onClick={handleBreakOutClick}>Break Out</button>
//             )}
//             {!isBreakOut && (
//               <button onClick={handleBreakOutClick}>Log Out</button>
//             )}
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// export default Content;

// import React, { useState } from "react";
// import axios from "axios";

// const Content = () => {
//   const [loginTime, setLoginTime] = useState(null); // Initialize loginTime as null
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLoginClick = () => {
//     const currentTime = new Date().toISOString().slice(0, 19).replace("T", " "); // Format date as 'YYYY-MM-DD HH:MM:SS'

//     setLoginTime(currentTime);
//     setIsLoggedIn(true);
//     const email = "nandhini@gmail.com";
//     const login = "login";
//     const data = {
//       Time_activity: currentTime,
//       Userid: email,
//       Activity_type: login,
//     };
//     console.log(data);

//     axios
//       .post("http://localhost:8095/attendance1", data)
//       .then((response) => {
//         console.log("Login time stored successfully:", response.data);
//       })
//       .catch((error) => {
//         console.error("Error storing login time:", error);
//       });
//   };

//   const handleLogoutClick = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <>
//       <div>
//         <h2>Hi Good Morning!! </h2>
//         <h3>How are you </h3>
//         <h3>Enjoy your work</h3>

//         {!isLoggedIn && <button onClick={handleLoginClick}>Log In</button>}
//         {isLoggedIn && loginTime && (
//           <p id="login-time">You are successfully Logged in at: {loginTime}</p>
//         )}
//         {isLoggedIn && <button onClick={handleLogoutClick}>Log Out</button>}
//       </div>
//     </>
//   );
// };
// export default Content;

// import React, { useState } from "react";
// import axios from "axios";

// const Content = () => {
//   const [loginTime, setLoginTime] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [activityType, setActivityType] = useState("login");

//   const handleLoginClick = () => {
//     const currentTime = new Date().toISOString().slice(0, 19).replace("T", " ");
//     setLoginTime(currentTime);
//     setIsLoggedIn(true);
//     setActivityType("breakin"); // Set activity type to break-in after login

//     const email = "nandhini@gmail.com";
//     const data = {
//       Time_activity: currentTime,
//       Userid: email,
//       Activity_type: "login",
//     };

//     axios
//       .post("http://localhost:8095/attendance1", data)
//       .then((response) => {
//         console.log("Login time stored successfully:", response.data);
//       })
//       .catch((error) => {
//         console.error("Error storing login time:", error);
//       });
//   };

//   const handleBreakInClick = () => {
//     setActivityType("breakout"); // Set activity type to break-out after break-in
//   };

//   const handleBreakOutClick = () => {
//     setActivityType("logout"); // Set activity type to logout after break-out
//   };

//   const handleLogoutClick = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <div>
//       <h2>Hi Good Morning!!</h2>
//       <h3>How are you</h3>
//       <h3>Enjoy your work</h3>

//       {!isLoggedIn && <button onClick={handleLoginClick}>Log In</button>}
//       {isLoggedIn && loginTime && (
//         <p id="login-time">You are successfully Logged in at: {loginTime}</p>
//       )}
//       {isLoggedIn && (
//         <>
//           {activityType === "breakin" && (
//             <button onClick={handleBreakInClick}>Break In</button>
//           )}
//           {activityType === "breakout" && (
//             <button onClick={handleBreakOutClick}>Break Out</button>
//           )}
//           {activityType === "logout" && (
//             <button onClick={handleLogoutClick}>Log Out</button>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default Content;

import React, { useState } from "react";
import axios from "axios";

const Content = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleButtonClick = (activityType) => {
    // const currentTime = new Date().toISOString().slice(0, 19).replace("T", " ");
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const currentTime = `${month}/${date}/${year}`;
    const email = "nandhini@gmail.com";

    const data = {
      Date: currentTime,
      Userid: email,
      Activity_type: activityType,
    };

    axios
      .post("http://localhost:8095/attendance1", data)
      .then((response) => {
        console.log(`${activityType} time stored successfully:`, response.data);
        if (activityType === "login") {
          setIsLoggedIn(true);
        } else if (activityType === "logout") {
          setIsLoggedIn(false);
        }
      })
      .catch((error) => {
        console.error(`Error storing ${activityType} time:`, error);
      });
  };

  return (
    <div>
      <h2>Hi Good Morning!!</h2>
      <h3>How are you</h3>
      <h3>Enjoy your work</h3>

      {!isLoggedIn && (
        <button onClick={() => handleButtonClick("login")}>Log In</button>
      )}
      {isLoggedIn && (
        <>
          <button onClick={() => handleButtonClick("breakin")}>Break In</button>
          <button onClick={() => handleButtonClick("breakout")}>
            Break Out
          </button>
          <button onClick={() => handleButtonClick("logout")}>Log Out</button>
        </>
      )}
    </div>
  );
};

export default Content;
