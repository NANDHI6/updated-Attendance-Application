// import React from 'react'
// import { BrowserRouter,Route,Routes } from 'react-router-dom';
// // npm i axios

// import { Navbar } from './navbar/navbar';
// import "./navbar/navbar.css"
// // import { Login } from './navbar/login';
// import Home from './navbar/home';
// import {Sidebar} from './Sidebar/Sidebar'

// function  App() {
//   return (
//     <div>
//     <>
//     <BrowserRouter>
//         <Navbar/>
//         <Routes>
//           <Route path='/' element={<Home/>}></Route>
//           {/* <Route path='/login' element={<Login/>}></Route> */}
//         </Routes>
//       </Sidebar>
//   </BrowserRouter>
//     </>

//     </div>
//   )
// }

// export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./navbar/navbar";
import "./navbar/navbar.css";

// import Sidebar from "./Sidebar/Sidebar"; // Import Sidebar component
// import "./Sidebar/sidebar.css";
// import Content from "./component/content";
// import Table from "./component/table";
import Main from "./Pages/main";

function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Navbar /> */}
      {/* <div style={{ display: 'flex' }}> Use flexbox to align components */}
      {/* <Sidebar /> Include Sidebar component */}
      {/* <Routes> */}
      {/* <Route path='/' element={<Content />} /> */}
      {/* Add more routes as needed */}
      {/* </Routes> */}
      {/* <Content/> */}
      {/* </div> */}

      {/* </BrowserRouter> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
