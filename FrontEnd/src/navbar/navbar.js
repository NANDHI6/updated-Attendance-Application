// import React from 'react'
// import { Link } from 'react-router-dom';
// import pozent from "./Pozent.jpg"
// import { IoMdSearch } from "react-icons/io";
// import profile from "./circle.jpg"
// import { useState } from 'react';



// export const Navbar = () => {
//   const [loginTime, setLoginTime] = useState('');
//   const handleLoginClick = () => {
//     // Capture the current system time
//     const currentTime = new Date().toLocaleString();
//     setLoginTime(currentTime);
//   };
                                                                     



//   return (
//     <nav id='navbar'>
//       <img src={pozent} alt="" className='logo' />

//       {/* <ul id='nav-links'> */}


//       {/* <Link to="/login" id='Login'><li><button>login</button></li></Link> */}

//       {/* </ul> 
//         */}
//       <div className="search-box">
//         <input type="text" placeholder='search' className='inp' /><IoMdSearch id='sh' />

//       </div>
//       <button onClick={handleLoginClick}>Log In</button>
//       {loginTime && (
//         <p id='login-time'><h1>YOU ARE successfully</h1><br></br>Logged in at: {loginTime}</p>
//       )}
//       {/* <Link to="/" id='Home'>HOME</Link> */}
//       <img src={profile} alt=" " className='profile' />



//       {/* <Link to="/" id='Home'>LOGIN TIME</Link>

//       <img src={profile} alt=" " className='profile'></img> */}

//     </nav>
//   )
// }


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import pozent from "./Pozent.jpg";
// import { IoMdSearch } from "react-icons/io";
// import profile from "./circle.jpg";

// export const Navbar = () => {
//   const [loginTime, setLoginTime] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLoginClick = () => {
//     // Capture the current system time
//     const currentTime = new Date().toLocaleString();
//     setLoginTime(currentTime);
//     setIsLoggedIn(true); // Set login status to true
//   };

//   const handleLogoutClick = () => {
//     setIsLoggedIn(false); // Set login status to false
//   };

//   return (
//     <nav id='navbar'>
//       <img src={pozent} alt="" className='logo' />
//       <div className="search-box">
//         <input type="text" placeholder='search' className='inp' /><IoMdSearch id='sh' />
//       </div>
//       {!isLoggedIn && ( // Render login button if not logged in
//         <button onClick={handleLoginClick}>Log In</button>
//       )}
//       {isLoggedIn && loginTime && ( // Render login time if logged in
//         <p id='login-time'><h1>YOU ARE successfully</h1><br />Logged in at: {loginTime}</p>
//       )}
//       {isLoggedIn && ( // Render logout button if logged in
//         <button onClick={handleLogoutClick}>Log Out</button>
//       )}
//       {/* <Link to="/" id='Home'>HOME</Link> */}
//       <img src={profile} alt=" " className='profile' />
//     </nav>
//   )
// }

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import pozent from "./Pozent.jpg";
// import { IoMdSearch } from "react-icons/io";
// import profile from "./circle.jpg";
// import axios from 'axios'; // Import axios for making HTTP requests

// export const Navbar = () => {
//   const [loginTime, setLoginTime] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

// //   
// const handleLoginClick = () => {
//   // Capture the current system time
//   const currentTime = new Date().toLocaleString();

//   // Update login status and time
//   setLoginTime(currentTime);
//   setIsLoggedIn(true);

//   // Call userLogin function to store login time in the database
//   userLogin({ Login_Time: currentTime })
//     .then(response => {
//       console.log('Login time stored successfully:', response.data);
//     })
//     .catch(error => {
//       console.error('Error storing login time:', error);
//     });
// };

// // Function to send login time to backend endpoint
// const userLogin = async (data) => {
//   try {
//     const response = await axios.post("/attendance", data);
//     return response;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };

  


//   const handleLogoutClick = () => {
//     setIsLoggedIn(false); // Set login status to false
//   };

//   return (
//     <nav id='navbar'>
//       <img src={pozent} alt="" className='logo' />
//       <div className="search-box">
//         <input type="text" placeholder='search' className='inp' /><IoMdSearch id='sh' />
//       </div>
//       {!isLoggedIn && ( // Render login button if not logged in
//         <button onClick={handleLoginClick}>Log In</button>
//       )}
//       {isLoggedIn && loginTime && ( // Render login time if logged in
//         <p id='login-time'><h1>YOU ARE successfully</h1><br />Logged in at: {loginTime}</p>
//       )}
//       {isLoggedIn && ( // Render logout button if logged in
//         <button onClick={handleLogoutClick}>Log Out</button>
//       )}
     
//       <img src={profile} alt=" " className='profile' />
//     </nav>
//   )
// }

import React, { useState } from 'react';
import pozent from "./Pozent.jpg";
import { IoMdSearch } from "react-icons/io";

export const Navbar = () =>{
return (
      <nav id='navbar'>
      <img src={pozent} alt="" className='logo' />
      <div className="search-box">
        <input type="text" placeholder='search' className='inp' /><IoMdSearch id='sh' />
      </div>

    </nav>
  )
}








































































// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import pozent from "./Pozent.jpg"
// import { IoMdSearch } from "react-icons/io";
// import profile from "./circle.jpg"

// const Navbar = () => {
//   const [loginTime, setLoginTime] = useState('');

//   const handleLoginClick = () => {
//     // Capture the current system time
//     const currentTime = new Date().toLocaleString();
//     setLoginTime(currentTime);
//   };

//   return (
//     <nav id='navbar'>
//       <img src={pozent} alt="" className='logo'/>
//       <div className="search-box">
//         <input type="text" placeholder='search' className='inp' /><IoMdSearch id='sh'/> 
//       </div>
//       <button onClick={handleLoginClick}>Log In</button>
//       {loginTime && (
//         <p id='login-time'>Logged in at: {loginTime}</p>
//       )}
//       <Link to="/" id='Home'>HOME</Link>
//       <img src={profile} alt=" " className='profile' />
//     </nav>
//   )
// }

// export default Navbar;


